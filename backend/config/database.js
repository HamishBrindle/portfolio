/**
 * Connects to remote/local prsima DB and gives query abilities via JS
 */
const { Prisma } = require('prisma-binding');

const ENDPOINT = (process.env.NODE_ENV === 'test')
    ? 'TEST_PRISMA_ENDPOINT'
    : 'PRISMA_ENDPOINT';

const db = new Prisma({
    typeDefs: 'graphql/generated/prisma.graphql',
    endpoint: process.env[ENDPOINT],
    secret: process.env.PRISMA_SECRET,
    debug: false
});

module.exports = db; 