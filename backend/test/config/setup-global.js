require('dotenv').config({ path: __dirname + '/../../.env' });

const shell = require('shelljs');
const path = require('path');

const { Mutation, Query } = require('../../api/resolvers');
const { createServer } = require('../../config/server');
const database = require('../../config/database');

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

module.exports = async () => {
  console.log('\n\n🚀🚀🚀 SETUP 🚀🚀🚀\nResetting database and setting up server...');

  /**
   * We need custom environment variables for testing. Build
   * string of env variables to prepend to shell commands.
   */
  let envString = Object.entries(ENV).map(([key, value]) => `${key}="${value}"`).reduce((acc, curr, idx, arr) => acc + curr + ' ', '');

  // Execute shell commands synchronously to reset and redeploy Prisma
  shell.exec(`${envString} prisma reset -f`);
  shell.exec(`${envString} prisma deploy`); // If more info required, insert DEBUG='*'

  /**
   * Create server and pass server instance as global variable
   * so we can close it during teardown.
   */
  const server = createServer(database, { ...Mutation, ...Query });
  const httpServer = await server.start({
    cors: {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204
  },
    port: process.env.TEST_SERVER_PORT
  }, (details) => {
    console.log(`\n🕵 Testing-server running on http://localhost:${details.port} 🕵\n`);
  });

  // For use throughout tests?
  process.env.TEMP_DIR = path.resolve(__dirname + '/../.tmp');
  process.env.TEST_ROOT = path.resolve(__dirname + '/../');

  // For closing server during teardown
  global.httpServer = httpServer;
  
  return httpServer;
}