require('dotenv').config({ path: `.env` });

const { Mutation, Query } = require('./resolvers');
const { createServer } = require('../config/server');
const database = require('../config/database');

const DEV = (process.env.NODE_ENV === 'dev');

const server = createServer(database, { ...Mutation, ...Query });
server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONT_END_URL,
    }
}, (details) => {
    DEV && console.log(`Server is now running on http://localhost:${details.port}!`);
}).then((httpServer) => {
    DEV && console.log('-------------- httpServer Details --------------\n', httpServer);
    DEV && console.log('-------------------------------------------------');
});