require('dotenv').config({ path: `.env` });

const express = require('express');
const { Mutation, Query } = require('./resolvers');
const { createServer } = require('../config/server');
const database = require('../config/database');

const app = express();

const server = createServer(database, { Mutation, Query });

server.applyMiddleware({ app });

const httpServer = app.listen({ port: process.env.SERVER_PORT }, () => {
    console.log(`🚀🚀🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath} 🚀🚀🚀`);
});