const { forwardTo } = require('prisma-binding'); 

const Projects = {
  projects: forwardTo('database'),
  project: forwardTo('database')
}

module.exports = Projects;