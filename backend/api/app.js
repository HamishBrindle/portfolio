require('dotenv').config({ path: 'variables.env'});

const server = require('../config/server')();
const database = require('../config/database');
const DEBUG = (process.env.NODE_ENV === 'dev');

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONT_END_URL,
    }
}, (details) => {
    DEBUG && console.log(`Server is now running on http://localhost:${details.port}!`);
})