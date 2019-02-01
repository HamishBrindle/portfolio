/** 
 * PrismaTestEnvironment.
 * 
 * A custom Node testing environment - not many mostly
 * just tweaks to the setup and teardown. 
 * 
 * - Reset database, clear all data
 * - Redploy database for updates to schema
 * - Start the prisma server
 */
require('dotenv').config({ path: __dirname + '/../../.env' });

const NodeEnvironment = require('jest-environment-node');
const { Mutation, Query } = require('../../api/resolvers');
const { createServer } = require('../../config/server');
const database = require('../../config/database');
const shell = require('shelljs');

class PrismaTestEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
    this.testPath = context.testPath;

    /**
     * Our environment variables with our testing overrides
     * at the top: PRISMA_ENDPOINT and PORT.
     */
    const ENV = {
      PRISMA_ENDPOINT: process.env.TEST_PRISMA_ENDPOINT, // Override
      PORT: process.env.TEST_SERVER_PORT, // Override
      PRISMA_MANAGEMENT_API_SECRET: process.env.PRISMA_MANAGEMENT_API_SECRET,
      FRONTEND_URL: process.env.FRONTEND_URL,
      PRISMA_SECRET: process.env.PRISMA_SECRET,
      APP_SECRET: process.env.APP_SECRET,
      STRIPE_SECRET: process.env.STRIPE_SECRET,
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
    }

    /**
     * We need custom environment variables for testing. Build
     * string of env variables to prepend to shell commands.
     */
    let envString = Object.entries(ENV).map(([key, value]) => `${key}="${value}"`).reduce((acc, curr, idx, arr) => acc + curr + ' ', '');

    // Execute shell commands synchronously to reset and redeploy Prisma
    shell.exec(`${envString} prisma reset -f`);
    shell.exec(`${envString} DEBUG='*' prisma deploy`);
  }

  async setup() {
    await super.setup();

    /**
     * Create server and pass server instance as global variable
     * so we can close it during teardown.
     */
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