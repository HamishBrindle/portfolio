require('dotenv').config({ path: `.env` });

const express = require('express');
const { graphqlUploadExpress } = require('graphql-upload');
const resolvers = require('./resolvers');
const { createServer } = require('../config/server');
const database = require('../config/database');

const app = express();

app.use(
	graphqlUploadExpress({
		maxFileSize: 10000000,
		maxFiles: 20
	})
);

const server = createServer(database, resolvers);

server.applyMiddleware({ app });

const httpServer = app.listen({ port: process.env.SERVER_PORT }, () => {
	console.log(`🚀🚀🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath} 🚀🚀🚀`);
});