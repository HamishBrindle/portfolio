import { request } from 'graphql-request';

import imagesService from '../../../api/services/images';

describe('Image Services: Upload', () => {
  test('can upload image from file system', async () => {
    const uploadResponse = await imagesService.uploadImage(`${process.env.TEST_ROOT}/assets/image-sm.jpg`, {
      public_id: `images/image-sm`
    });

    expect(uploadResponse).toBeTruthy();
    expect(uploadResponse.resource_type).toEqual('image');
    expect(uploadResponse.url).toBeTruthy();
  });
});
