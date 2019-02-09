require('dotenv').config({ path: __dirname + '/../../.env' });

const shell = require('shelljs');
const colors = require('colors/safe');

/**
 * Our environment variables with our testing overrides
 * at the top: PRISMA_ENDPOINT and PORT.
 */
const ENV = {
  PRISMA_ENDPOINT: process.env.TEST_PRISMA_ENDPOINT, // Override
  PORT: process.env.TEST_SERVER_PORT, // Override
  PRISMA_MANAGEMENT_API_SECRET: process.env.PRISMA_MANAGEMENT_API_SECRET,
  PRISMA_SECRET: process.env.PRISMA_SECRET
}

module.exports = async () => {
  console.log(colors.rainbow(`\n\n
    ███████╗███████╗████████╗██╗   ██╗██████╗ 
    ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
    ███████╗█████╗     ██║   ██║   ██║██████╔╝
    ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝ 
    ███████║███████╗   ██║   ╚██████╔╝██║     
    ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝                                           
  `));

  let envString = Object.entries(ENV).map(([key, value]) =>
    `${key}="${value}"`).reduce((acc, curr, idx, arr) =>
      acc + curr + ' ', '');

  console.log('\x1b[35m'); // Color output magenta
  shell.exec(`${envString} prisma reset -f`);
  shell.exec(`${envString} prisma deploy`); // If more info required, insert DEBUG='*'
}