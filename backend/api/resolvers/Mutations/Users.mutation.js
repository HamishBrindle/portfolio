const { forwardTo } = require('prisma-binding');
const { randomBytes } = require('crypto');
const { async } = require('../../tools');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { transport, makeEmail } = require('../../services/mail');
const { util } = require('../../tools');

const html = util.tag;

const Users = {
	async signUp(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();

    const password = await bcrypt.hash(args.password, 10);
		const user = await ctx.database.mutation.createUser({
			data: {
        ...args,
        password,
        permissions: { set: ['ADMIN', 'USER', 'PERMISSON_UPDATE'] },
        lastLoggedIn: moment.utc().format()
			}
    }, info);

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
		return user;
  },
  
  async signIn(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();

    let user = await ctx.database.query.user({ where: { email: args.email } });
    if (!user) throw new Error(`No user with email '${args.email}' exists.`)

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) throw new Error(`Invalid password, mate.`);

    user = await ctx.database.mutation.updateUser({
      where: { email: args.email },
			data: {
        lastLoggedIn: moment.utc().format()
			}
    }, info);

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    return user;
  },

  async signOut(parent, args, ctx, info) {
    ctx.res.clearCookie('token');
    return {
      message: 'User signed out successfully.'
    }
  },

  async requestReset(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();

    const user = await ctx.database.query.user({ where: { email: args.email } });
    if (!user) throw new Error(`No user with email '${args.email}' exists.`);

    const randomBytesAsync = async.promisify(randomBytes);
    const resetToken = (await randomBytesAsync(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000;

    await ctx.database.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });

    try {
      await transport.sendMail({
        from: 'hamishbrindle@gmail.com',
        to: args.email,
        subject: 'Password reset token!',
        html: makeEmail('resetPassword', html`
          Your password reset token is available here:
          <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">
            Click Here to Reset!
          </a>
        `)
      });
    } catch (err) {
      console.error(err);
      throw new Error(`Unable to send a password reset token. I am ashamed 😞`);
    }

    return {
      message: 'Reset request successful. Email sent!'
    }
  },

  async resetPassword(parent, args, ctx, info) {
    if (args.password !== args.confirmPassword) {
      throw new Error(`Passwords don't match.`);
    }

    const [ user ] = await ctx.database.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });

    if (!user) {
      throw new Error(`Reset token is invalid or expired.`);
    }

    const password = await bcrypt.hash(args.password, 10);

    const updatedUser = await ctx.database.mutation.updateUser({
      where: { email: user.email },
      data: { password, resetToken: null, resetTokenExpiry: null }
    });

    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    ctx.res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    return updatedUser;
  }
};

module.exports = Users;
