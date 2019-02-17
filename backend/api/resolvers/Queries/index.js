const Query = {
    ...require('./Projects.query'),
    ...require('./Pages.query'),
    ...require('./Styles.query'),
    ...require('./Technologies.query'),
};

module.exports = Query;
