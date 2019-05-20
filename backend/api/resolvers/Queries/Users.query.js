const { forwardTo } = require('prisma-binding'); 

const Users = {
  async currentUser(parent, args, ctx, info) {
    if (!ctx.req.userId) return null;
    const user = await ctx.database.query.user({
      where: {
        id: ctx.req.userId
      }
    }, info);

		return user;
	},

  users: forwardTo('database'),
  user: forwardTo('database')
}

module.exports = Users;