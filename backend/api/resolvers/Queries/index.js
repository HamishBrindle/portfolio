const Query = {
    ...require('./Projects.query'),
    ...require('./Pages.query'),
    ...require('./Styles.query'),
    ...require('./Technologies.query'),
    ...require('./Users.query'),
};

module.exports = Query;
