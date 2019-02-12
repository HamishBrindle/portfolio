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

	async deletePage(parent, args, ctx, info) {
		const page = await ctx.database.mutation.deletePage({
			where: {
				...args
			}
		});

		return page;
	}
};

module.exports = Pages;
