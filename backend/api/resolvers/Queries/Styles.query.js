const { forwardTo } = require('prisma-binding'); 

const Styles = {
  styles: forwardTo('database'),
  style: forwardTo('database')
}

module.exports = Styles;