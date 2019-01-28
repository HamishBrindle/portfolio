const cloudinary = require('cloudinary');
const { async } = require('../tools');

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary = async.promisify(cloudinary.v2.uploader.upload);
uploadCloudinary("my_picture.jpg")
  .then((result) =>
    console.log('Upload image result:', result))
  .catch((error) =>
    console.error('Upload image failed: Error:', error));

//  TODO: Implement options parameters
/*
req.files.myImage.path,
  {
    public_id: 'sample_id', 
    crop: 'limit',
    width: 2000,
    height: 2000,
    eager: [
      { width: 200, height: 200, crop: 'thumb', gravity: 'face',
        radius: 20, effect: 'sepia' },
      { width: 100, height: 150, crop: 'fit', format: 'png' }],                                     
    tags: ['special', 'for_homepage']
  }
*/