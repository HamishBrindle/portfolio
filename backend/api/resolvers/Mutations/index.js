const Projects = require('./Projects.mutation');
const Files = require('./Files.mutation');

const Mutations = {
	...Projects,
	...Files
};

module.exports = Mutations;
