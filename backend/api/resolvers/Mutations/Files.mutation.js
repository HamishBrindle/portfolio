const { forwardTo } = require('prisma-binding');

const Files = {
	async singleUpload(parent, args, ctx, info) {
    console.log('Files: singleUpload: parent', parent);
    console.log('Files: singleUpload: args', args);
    console.log('Files: singleUpload: ctx', ctx);
    console.log('Files: singleUpload: info', info);

    console.log('RESULT: ', await processUpload(args.file));
  },
  
  async multipleUpload(parent, args, ctx, info) {
    console.log('Files: multipleUpload: parent', parent);
    console.log('Files: multipleUpload: args', args);
    console.log('Files: multipleUpload: ctx', ctx);
    console.log('Files: multipleUpload: info', info);

		console.log('RESULT: ', await Promise.all(args.files.map(processUpload)));
	}
};

module.exports = Files;
