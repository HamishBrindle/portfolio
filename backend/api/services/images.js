const cloudinary = require('cloudinary');
const { async } = require('../tools');

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

/**
 * Upload an image to Cloudinary and return details.
 * 
 * @param {String} path - image location
 * @param {Object} [options] - config for upload
 * 
 * @tutorial https://cloudinary.com//documentation/node_integration
 * 
 * @example
 * options: {
 *    public_id: 'images/sample_id',
 *    crop: 'limit',
 *    width: 2000,
 *    height: 2000,
 *    eager: [
 *      { width: 200, height: 200, crop: 'thumb', gravity: 'face', radius: 20, effect: 'sepia' },
 *      { width: 100, height: 150, crop: 'fit', format: 'png' }
 *    ],
 *    tags: ['special', 'for_homepage']
 * }
 * 
 * @returns {Promise}
 */
const uploadImage = async (filepath, options) => 
  async.promisify(cloudinary.v2.uploader.upload)(filepath, options);

module.exports = { 
  uploadImage
};