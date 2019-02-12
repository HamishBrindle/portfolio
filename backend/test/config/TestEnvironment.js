require('dotenv').config({ path: __dirname + '/../../.env' });

const NodeEnvironment = require('jest-environment-node');
const path = require('path');

const { Mutation, Query } = require('../../api/resolvers');
const { createServer } = require('../../config/server');
const database = require('../../config/database');

class TestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    let server;
    try {
      // Any issues with resolvers made apperant here
      server = createServer(database, { Mutation, Query });
    } catch (error) {
      console.error(error);
      throw new Error('\n\n🚀💥 Error STARTING server 🚀💥\n');
    }

    const httpServer = await server.start({
      port: 0, // For randomly assigned port
      cors: {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
      },
    });
  
    const { port } = httpServer.address();
    this.global.host = `http://127.0.0.1:${port}`;
    this.global.httpServer = httpServer;
    this.global.TEMP_DIR = path.resolve(__dirname + '/../.tmp');
    this.global.TEST_ROOT = path.resolve(__dirname + '/../');

    await super.setup();
  }

  async teardown() {
    try {
      this.global.httpServer.close();
    } catch (error) {
      console.error(error);
      throw new Error('\n\n❌ Error CLOSING server ❌\n');
    }

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = TestEnvironment