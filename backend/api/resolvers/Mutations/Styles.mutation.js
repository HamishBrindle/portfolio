const { forwardTo } = require('prisma-binding');

const Styles = {
	async createStyle(parent, args, ctx, info) {
		const style = await ctx.database.mutation.createStyle({
			data: {
				...args
			}
		}, info);

		return style;
	},

	async updateStyle(parent, args, ctx, info) {
		const updates = { ...args };
		delete updates.id;
		const style = await ctx.database.mutation.updateStyle({
			data: updates,
			where: {
				id: args.id
			}
		}, info);

		return style;
	},


	async deleteStyle(parent, args, ctx, info) {
		const style = await ctx.database.mutation.deleteStyle({
			where: {
				...args
			}
		}, info);

		return style;
	}
};

module.exports = Styles;
