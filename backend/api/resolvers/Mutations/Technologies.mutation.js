const { forwardTo } = require('prisma-binding');

const Technologies = {
	async createTechnology(parent, args, ctx, info) {
		const technology = await ctx.database.mutation.createTechnology({
			data: {
				...args
			}
		}, info);

		return technology;
	},

	async updateTechnology(parent, args, ctx, info) {
		const updates = { ...args };
		delete updates.id;
		const technology = await ctx.database.mutation.updateTechnology({
			data: updates,
			where: {
				id: args.id
			}
		}, info);

		return technology;
	},

	async deleteTechnology(parent, args, ctx, info) {
		const technology = await ctx.database.mutation.deleteTechnology({
			where: {
				...args
			}
		}, info);

		return technology;
	}
};

module.exports = Technologies;
