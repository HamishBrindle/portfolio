const { forwardTo } = require('prisma-binding');

const Files = {
  async singleUpload(parent, args, ctx, info) {
    // ...
    console.log('singleUpload: args', args);
    return {};
  },

  async multipleUpload(parent, args, ctx, info) {
    // ...
    console.log('multipleUpload: args', args);
    return {};
  }
};

module.exports = Files;
