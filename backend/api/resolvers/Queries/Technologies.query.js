const { forwardTo } = require('prisma-binding'); 

const Technologies = {
  technologies: forwardTo('database'),
  technology: forwardTo('database')
}

module.exports = Technologies;