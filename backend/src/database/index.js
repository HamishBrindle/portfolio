/**
 * Connects to remote/local prsima DB and gives query abilities via JS
 */
const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/database/graphql/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true
});

module.exports = db; 