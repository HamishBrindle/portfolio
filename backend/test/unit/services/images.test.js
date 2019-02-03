const imagesService = require('../../../api/services/images');

describe('Image Services: Upload', () => {

  test('can upload image from file system', async () => {
    const uploadResponse = await imagesService.uploadImage(`${global.testRoot}/assets/image-sm.jpg`, {
      public_id: `images/image-sm`
    });

    expect(uploadResponse).toBeTruthy();
    expect(uploadResponse.resource_type).toEqual('image');
    expect(uploadResponse.url).toBeTruthy();
  });

  test.skip('can upload image from browser via req.files', async () => {
    const uploadResponse = await imagesService.uploadImage(`${global.testRoot}/assets/image-sm.jpg`, {
      public_id: `images/image-sm`
    });

    expect(uploadResponse).toBeTruthy();
    expect(uploadResponse.resource_type).toEqual('image');
    expect(uploadResponse.url).toBeTruthy();
  });
});
