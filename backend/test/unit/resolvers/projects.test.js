import { request } from 'graphql-request';
import gql from 'graphql-tag';

import imagesService from '../../../api/services/images';

beforeAll(async () => {
  const { port } = global.httpServer.address();
  global.host = `http://127.0.0.1:${port}`;
});

describe('Projects Resolvers: Mutations', async () => {

  test('can create a new project', async () => {
    const projectName = "Goon Project";
    const projectDescription = "This is a description of the goonest project ever constructed.";
    const projectPageStyleShape = 'JAGGED';

    const mutation = gql`
      mutation {
        createProject(
          name: "${projectName}"
          description: "${projectDescription}"
          page: {
            create: {
              route: "projects/gooon"
              style: {
                create: {
                  shape: ${projectPageStyleShape}
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
          name
          description
          page {
            style {
              shape
              colors {
                shade
                type
                hex
              }
            }
          }
        }
      }
    `;

    const response = await request(global.host, mutation);

    expect(response).toBeDefined();
    expect(response.createProject).toBeDefined();
    expect(response.createProject.id).toBeDefined();
    expect(typeof response.createProject.id).toEqual('string');
    expect(response.createProject.name).toEqual(projectName);
    expect(response.createProject.description).toEqual(projectDescription);
    expect(response.createProject.page.style.shape).toEqual(projectPageStyleShape);
    expect(response.createProject.page.style.colors.length).toEqual(2);
  });
});
