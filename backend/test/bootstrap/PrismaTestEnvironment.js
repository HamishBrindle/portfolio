// prisma-test-environment
require('dotenv').config({path: __dirname + '/../../.env'});

const NodeEnvironment = require('jest-environment-node');
const { Mutation, Query } = require('../../api/resolvers');
const { createServer } = require('../../config/server');
const database = require('../../config/database');
const shell = require('shelljs');

class PrismaTestEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
    this.testPath = context.testPath;

    // TODO: Find clean way to get this into process to begin with
    let testEndpoint = process.env.PRISMA_TEST_ENDPOINT;

    /** 
     * * Reset data in prisma and redeploy...
     * 
     * ? NOTE: For now we will leave migrations enabled for the test
     * ? DB because the wait time to complete tear down is crazy long
     */
    const env = {
      PRISMA_ENDPOINT: testEndpoint, // Replacing dev endpoint with test endpoint
      PRISMA_MANAGEMENT_API_SECRET: process.env.PRISMA_MANAGEMENT_API_SECRET,
      FRONTEND_URL: process.env.FRONTEND_URL,
      PRISMA_SECRET: process.env.PRISMA_SECRET,
      APP_SECRET: process.env.APP_SECRET,
      STRIPE_SECRET: process.env.STRIPE_SECRET,
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME, 
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY, 
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
      PORT: process.env.PORT
    }

    let envString = Object.entries(env).map(([key, value]) => `${key}="${value}"`).reduce((acc, curr, idx, arr) => acc + curr + ' ', '');

    console.log('ENV STRING: ', envString);

    // shell.exec(`${envString} prisma reset -f`);
    shell.exec(`${envString} prisma deploy`);
  }

  async setup() {
    await super.setup();

    const server = createServer(database, { ...Mutation, ...Query });
    const httpServer = await server.start({
      cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
      }
    });

    this.global.httpServer = httpServer;
  }

  async teardown() {
    await this.global.httpServer.close();
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PrismaTestEnvironment;