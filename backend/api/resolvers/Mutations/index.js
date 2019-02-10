const Projects = require('./Projects.mutation');
const Files = require('./Files.mutation');

const Mutation = {
	...Projects,
	...Files
};

module.exports = Mutation;
