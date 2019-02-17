const Mutation = {
	...require('./Projects.mutation'),
	...require('./Pages.mutation'),
	...require('./Technologies.mutation'),
	...require('./Styles.mutation'),
	// ...require('./Uploads.mutation'),
};

module.exports = Mutation;
