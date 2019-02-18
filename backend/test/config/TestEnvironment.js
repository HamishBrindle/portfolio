require('dotenv').config({ path: __dirname + '/../../.env' });

const NodeEnvironment = require('jest-environment-node');
const { graphqlUploadExpress } = require('graphql-upload');
const express = require('express');
const path = require('path');

const resolvers = require('../../api/resolvers');
const database = require('../../config/database');
const { createServer } = require('../../config/server');

class TestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    const app = express();

    app.use(
      graphqlUploadExpress({
        maxFileSize: 10000000, // 10 MB
        maxFiles: 20
      })
    );
    
    let server;
    try {
      // Any issues with resolvers made apperant here
      server = createServer(database, resolvers);
      server.applyMiddleware({ app });
    } catch (error) {
      console.log('\n\n💥 Error creating server 💥:\n');
      console.log(error);
      process.exit(1);
    }

    let httpServer;
    await new Promise((resolve, reject) => {
      try {
        httpServer = app.listen({ port: 0 }, () => {
          resolve();
        });
      } catch (error) {
        console.log('\n\n💥 Error listening to express app 💥:\n');
        console.log(error);
        process.exit(1);
      }
    });

    const { port } = httpServer.address();
    this.global.HOST = `http://127.0.0.1:${port}${server.graphqlPath}`;
    this.global.HTTP_SERVER = httpServer;
    this.global.TEMP_DIR = path.resolve(__dirname + '/../.tmp');
    this.global.TEST_ROOT = path.resolve(__dirname + '/../');

    await super.setup();
  }

  async teardown() {
    await new Promise((resolve, reject) => {
      try {
        this.global.HTTP_SERVER.close(() => resolve()); // Successfully closed.
      } catch (error) {
        console.log('\n\n❌ Error closing server ❌:\n');
        console.log(error);
        process.exit(1);
      }
    });
    
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = TestEnvironment