require('dotenv').config({ path: 'variables.env'});

const createServer = require('./config/createServer');
const db = require('./config/database');
const server = createServer();
const DEBUG = (process.env.NODE_ENV === 'dev');

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONT_END_URL,
    }
}, (details) => {
    DEBUG && console.log(`Server is now running on http://localhost:${details.port}!`);
})