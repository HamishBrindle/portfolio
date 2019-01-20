const Mutations = {
    async createProject(parent, args, ctx, info) {
        // Check if logged in
        const project = await ctx.database.mutation.createProject({
            data: {
                ...args
            }
        }, info);

        return project;
    },

    async deleteProject(parent, args, ctx, info) {
        const project = await ctx.database.mutation.deleteProject({
            where: {
                ...args
            }
        });

        return project;
    }
};

module.exports = Mutations;
