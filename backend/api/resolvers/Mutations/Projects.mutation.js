const { forwardTo } = require('prisma-binding');

const Projects = {
	async createProject(parent, args, ctx, info) {
		const project = await ctx.database.mutation.createProject({
			data: {
				...args
			}
		}, info);

		return project;
	},

	async updateProject(parent, args, ctx, info) {
		const updates = { ...args };
		delete updates.id;
		const project = await ctx.database.mutation.updateProject({
			data: updates,
			where: {
				id: args.id
			}
		}, info);

		return project;
	},

	async deleteProject(parent, args, ctx, info) {
		const project = await ctx.database.mutation.deleteProject({
			where: {
				id: args.id
			}
		}, info);

		return project;
	}
};

module.exports = Projects;
