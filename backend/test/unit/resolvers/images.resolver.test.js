import { request } from 'graphql-request';
import { gql } from 'apollo-server-express';
import { print } from 'graphql/language/printer';
import path from 'path';
import fs from 'fs';
import shortid from 'shortid';
import { util } from '../../../api/tools';
import * as Promise from 'bluebird';

describe('Image Resolvers: Mutations', () => {

  //  ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗
  // ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
  // ██║     ██████╔╝█████╗  ███████║   ██║   █████╗  
  // ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝  
  // ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗
  //  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

  test.only('can create a new Image', async () => {
    const fileName = 'image-sm.jpg';
    const filePath = path.resolve(`${global.TEST_ROOT}/assets/${fileName}`);

    let buffer;
    try {  
      buffer = fs.readFileSync(filePath);
    } catch(e) {
      console.log('Error:', e.stack);
    }

    const mutation = gql`
      mutation($file: Upload!) {
        createImage(
          url: "https://github.com/jaydenseric/graphql-upload#type-uploadoptions"
          title: "Image"
          caption: "Caption of some image"
          file: $file
        ) {
          id
          url
        }
      }
    `;

    const response = await request(global.HOST, print(mutation), { file: buffer });

    expect(response).toBeDefined();
    expect(response.createImage).toBeDefined();
    expect(response.createImage.url).toBeDefined();
    expect(typeof response.createImage.url).toEqual('string');
  });

  // ██╗   ██╗██████╗ ██████╗  █████╗ ████████╗███████╗
  // ██║   ██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
  // ██║   ██║██████╔╝██║  ██║███████║   ██║   █████╗  
  // ██║   ██║██╔═══╝ ██║  ██║██╔══██║   ██║   ██╔══╝  
  // ╚██████╔╝██║     ██████╔╝██║  ██║   ██║   ███████╗
  //  ╚═════╝ ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝

  test('can update an existing Image', async () => {
    const Image = {};

    const mutation = gql``;
    const response = await request(global.HOST, print(mutation));
    expect(response).toBeDefined();
  });

  // ██████╗ ███████╗██╗     ███████╗████████╗███████╗
  // ██╔══██╗██╔════╝██║     ██╔════╝╚══██╔══╝██╔════╝
  // ██║  ██║█████╗  ██║     █████╗     ██║   █████╗  
  // ██║  ██║██╔══╝  ██║     ██╔══╝     ██║   ██╔══╝  
  // ██████╔╝███████╗███████╗███████╗   ██║   ███████╗
  // ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝

  test('can delete one Image', async () => {
    const Image = {};

    const mutation = gql``;
    const response = await request(global.HOST, print(mutation))
    expect(response).toBeDefined();
  });
});


describe('Image Resolvers: Queries', () => {

  // ███████╗██╗███╗   ██╗██████╗      █████╗ ██╗     ██╗     
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔══██╗██║     ██║     
  // █████╗  ██║██╔██╗ ██║██║  ██║    ███████║██║     ██║     
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██╔══██║██║     ██║     
  // ██║     ██║██║ ╚████║██████╔╝    ██║  ██║███████╗███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝  ╚═╝╚══════╝╚══════╝

  test('can query all Image', async () => {
    const Image = {};

    const mutation = gql``;
    const response = await request(global.HOST, print(mutation))
    expect(response).toBeDefined();
  });

  // ███████╗██╗███╗   ██╗██████╗      ██████╗ ███╗   ██╗███████╗
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔═══██╗████╗  ██║██╔════╝
  // █████╗  ██║██╔██╗ ██║██║  ██║    ██║   ██║██╔██╗ ██║█████╗  
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██║   ██║██║╚██╗██║██╔══╝  
  // ██║     ██║██║ ╚████║██████╔╝    ╚██████╔╝██║ ╚████║███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝

  test('can query one Image', async () => {
    const Image = {};

    const mutation = gql``;
    const response = await request(global.HOST, print(mutation))
    expect(response).toBeDefined();

    const query = gql``;
    const queryResponse = await request(global.HOST, print(query))
    expect(queryResponse).toBeDefined();
  });
});