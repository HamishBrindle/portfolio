const Mutation = {
	...require('./Projects.mutation'),
	...require('./Pages.mutation'),
	...require('./Technologies.mutation'),
	...require('./Styles.mutation'),
	...require('./Images.mutation'),
};

module.exports = Mutation;
