const { forwardTo } = require('prisma-binding'); 

const Projects = {
  projects: forwardTo('database')
}

module.exports = Projects;