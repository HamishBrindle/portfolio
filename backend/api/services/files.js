import { createWriteStream } from 'fs';
import * as mkdirp from 'mkdirp';
import * as shortid from 'shortid';

const path = require('path');

const storeUpload = async ({ stream, filename }) => {
  const tempDir = path.resolve(__dirname + '/.tmp');
  
  console.log('uploads: storeUpload: tempDir', tempDir);
  mkdirp.sync(tempDir);

  const id = shortid.generate();
  const filepath = `${tempDir}/${id}-${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(filepath))
      .on('finish', () => resolve({ id, filepath }))
      .on('error', reject),
  );
}

const processUpload = async upload => {
  const { stream, filename } = await upload
  const { id, filepath } = await storeUpload({ stream, filename })
  return { id, filename, filepath };
}

module.exports = processUpload;