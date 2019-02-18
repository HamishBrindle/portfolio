const { forwardTo } = require('prisma-binding'); 

const Users = {
  async currentUser(parent, args, ctx, info) {
    if (!ctx.req.userId) null;
    
    const user = await ctx.database.user({
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