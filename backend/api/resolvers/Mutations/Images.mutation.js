const { forwardTo } = require('prisma-binding');
const { uploadImage } = require('../../services/images');

const Images = {
	async createImage(parent, args, ctx, info) {
		const { file, url, title, caption } = args;
		const { type, data, ext } = file;

		const base64Image = new Buffer(data, 'binary').toString('base64');
		const imgSrcString = `data:image/${ext || 'jpg'};base64,${base64Image}`;
		const details = await uploadImage(imgSrcString, {
			public_id: `images/${title}`
		});

		const image = await ctx.database.mutation.createImage({
			data: {
				url: details.url,
				title,
				caption
			}
		}, info);

		return image;
	},

	// async updateImage(parent, args, ctx, info) {
	// 	const updates = { ...args };
	// 	delete updates.id;
	// 	const style = await ctx.database.mutation.updateImage({
	// 		data: updates,
	// 		where: {
	// 			id: args.id
	// 		}
	// 	}, info);

	// 	return style;
	// },


	// async deleteImage(parent, args, ctx, info) {
	// 	const style = await ctx.database.mutation.deleteImage({
	// 		where: {
	// 			...args
	// 		}
	// 	}, info);

	// 	return style;
	// }
};

module.exports = Images;
