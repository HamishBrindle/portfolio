require('dotenv').config({ path: 'variables.env'});

const Mutation = require('../api/resolvers/Mutations');
const Query = require('../api/resolvers/Queries');
const server = require('../config/server');
const database = require('../config/database');

const DEV = (process.env.NODE_ENV === 'dev');

server(database, { Mutation, Query }).start({
    cors: {
        credentials: true,
        origin: process.env.FRONT_END_URL,
    }
}, (details) => {
    DEV && console.log(`Server is now running on http://localhost:${details.port}!`);
})