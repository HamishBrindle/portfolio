const { forwardTo } = require('prisma-binding');

const Pages = {
	async createPage(parent, args, ctx, info) {
		const page = await ctx.database.mutation.createPage({
			data: {
				...args
			}
		}, info);

		return page;
	},

	async updatePage(parent, args, ctx, info) {
		const updates = { ...args };
		delete updates.id;
		const page = await ctx.database.mutation.updatePage({
			data: updates,
			where: {
				id: args.id
			}
		}, info);

		return page;
	},


	async deletePage(parent, args, ctx, info) {
		const page = await ctx.database.mutation.deletePage({
			where: {
				...args
			}
		}, info);

		return page;
	}
};

module.exports = Pages;
