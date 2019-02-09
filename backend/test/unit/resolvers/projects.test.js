import { request } from 'graphql-request';
import gql from 'graphql-tag';

import imagesService from '../../../api/services/images';

beforeAll(async () => {
  const { port } = global.httpServer.address();
  global.host = `http://127.0.0.1:${port}`;
});

describe('Projects Resolvers: Mutations', () => {

  test('can create a new project', async () => {
    const mutation = gql`
      mutation {
        createProject(
          name: "Goonjest"
          description: "Wooo lets goo bud"
          page: {
            create: {
              route: "projects/gooon"
              style: {
                create: {
                  shape: JAGGED
                  colors: {
                    create: [
                      { shade: DARK, type: PRIMARY, hex: "#333333" }
                      { shade: DARK, type: SECONDARY, hex: "#444444" }
                    ]
                  }
                }
              }
            }
          }
        ) {
          id
        }
      }
    `;

    const response = await request(global.host, mutation);

    console.log('RESPONSE:', response);

    return true;
  });
});
