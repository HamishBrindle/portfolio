/**
 * Connects to remote/local prsima DB and gives query abilities via JS
 */
const { Prisma } = require('prisma-binding');
const TEST = process.env.NODE_ENV === 'test';

const db = new Prisma({
    typeDefs: 'graphql/generated/prisma.graphql',
    endpoint: (TEST) ? process.env.PRISMA_TEST_ENDPOINT : process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true
});

module.exports = db; 