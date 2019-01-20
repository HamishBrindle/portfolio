const { forwardTo } = require('prisma-binding'); 

const Query = {
    projects: forwardTo('database')
};

module.exports = Query;
