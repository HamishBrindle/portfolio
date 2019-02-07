import { createWriteStream } from 'fs';
import * as mkdirp from 'mkdirp';
import * as shortid from 'shortid';

const storeUpload = async ({ stream, filename }) => {
  console.log('uploads: storeUpload: filename', filename);
  console.log('uploads: storeUpload: global.tempDir', global.tempDir);

  mkdirp.sync(global.tempDir);

  const id = shortid.generate();
  const path = `${global.tempDir}/${id}-${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path }))
      .on('error', reject),
  );
}

const processUpload = async upload => {
  const { stream, filename, mimetype, encoding } = await upload
  const { id, path } = await storeUpload({ stream, filename })
  return Promise.resolve({ id, filename, mimetype, encoding, path });
}

module.exports = processUpload;