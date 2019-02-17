require('dotenv').config({ path: __dirname + '/../../.env' });

const NodeEnvironment = require('jest-environment-node');
const express = require('express');
const path = require('path');
const { util } = require('../../api/tools');

const { Mutation, Query } = require('../../api/resolvers');
const { createServer } = require('../../config/server');
const database = require('../../config/database');

class TestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    const app = express();
    
    let server;
    try {
      // Any issues with resolvers made apperant here
      server = createServer(database, { Mutation, Query });
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
    this.global.host = `http://127.0.0.1:${port}${server.graphqlPath}`;
    this.global.httpServer = httpServer;
    this.global.TEMP_DIR = path.resolve(__dirname + '/../.tmp');
    this.global.TEST_ROOT = path.resolve(__dirname + '/../');

    await super.setup();
  }

  async teardown() {
    await new Promise((resolve, reject) => {
      try {
        this.global.httpServer.close(() => resolve()); // Successfully closed.
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