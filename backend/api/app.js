require('dotenv').config({ path: `.env` });

const cookieParser = require('cookie-parser');
const express = require('express');
const { graphqlUploadExpress } = require('graphql-upload');
const resolvers = require('./resolvers');
const { createServer } = require('../config/server');
const database = require('../config/database');
const jwt = require('jsonwebtoken');

const app = express();

app.use(
	graphqlUploadExpress({
		maxFileSize: 10000000,
		maxFiles: 20
	})
);

var corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true
};

app.use(cookieParser());
app.use((req, res, next) => {
	const { token } = req.cookies;
	if (token) {
		const { userId } = jwt.verify(token, process.env.APP_SECRET);
		req.userId = userId;
	}
	next();
});

const server = createServer(database, resolvers);

server.applyMiddleware({
  app,
  path: '/graphql',
  cors: corsOptions, // disables the apollo-server-express cors to allow the cors middleware use
})

const httpServer = app.listen({ port: process.env.SERVER_PORT }, () => {
	console.log(`🚀🚀🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath} 🚀🚀🚀`);
});