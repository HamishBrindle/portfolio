const Mutation = {
	...require('./Projects.mutation'),
	...require('./Pages.mutation'),
	...require('./Uploads.mutation')
};

module.exports = Mutation;
