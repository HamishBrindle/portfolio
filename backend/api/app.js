require('dotenv').config({ path: `.env` });

const { Mutation, Query } = require('./resolvers');
const { createServer } = require('../config/server');
const database = require('../config/database');

const server = createServer(database, { ...Mutation, ...Query });

server.start({
    cors: {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    },
    port: process.env.SERVER_PORT
}, (details) => {
    (process.env.NODE_ENV === 'dev')
        && console.log(`Server is now running on http://localhost:${details.port}!`);
});