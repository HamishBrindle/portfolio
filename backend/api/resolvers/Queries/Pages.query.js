const { forwardTo } = require('prisma-binding'); 

const Pages = {
  pages: forwardTo('database'),
  page: forwardTo('database')
}

module.exports = Pages;