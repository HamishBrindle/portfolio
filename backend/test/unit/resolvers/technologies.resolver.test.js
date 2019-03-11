import { request } from 'graphql-request';
import { gql } from 'apollo-server-express';
import { print } from 'graphql/language/printer';
import { fakeTechnology } from '../../mock';
import * as Promise from 'bluebird';

describe('Technology Resolvers: Mutations', () => {

  //  ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗
  // ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
  // ██║     ██████╔╝█████╗  ███████║   ██║   █████╗  
  // ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝  
  // ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗
  //  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

  test('can create a new Technology', async () => {
    const Technology = fakeTechnology();

    const mutation = gql`
      mutation createTechnology {
        createTechnology(
          name: "${Technology.name}",
          image: {
            create: {
              url: "${Technology.image.url}"
              title: "${Technology.image.title}"
              caption: "${Technology.image.caption}"
            }
          }
          color: {
            create: {
              type: ${Technology.color.type}
              shade: ${Technology.color.shade}
              hex: "${Technology.color.hex}"
              rgb: "${Technology.color.rgb}"
            }
          }
        ) {
          id
          name
          image {
            url
            title
            caption
          }
          color {
            type
            shade
            hex
            rgb
          }
        }
      }
    `;

    const response = await request(global.HOST, print(mutation))

    expect(response).toBeDefined();
    expect(response.createTechnology.id).toBeDefined();
    expect(response.createTechnology.name).toEqual(Technology.name);
    expect(response.createTechnology.image.url).toEqual(Technology.image.url);
    expect(response.createTechnology.image.title).toEqual(Technology.image.title);
    expect(response.createTechnology.image.caption).toEqual(Technology.image.caption);
    expect(response.createTechnology.color.type).toEqual(Technology.color.type);
    expect(response.createTechnology.color.shade).toEqual(Technology.color.shade);
    expect(response.createTechnology.color.hex).toEqual(Technology.color.hex);
    expect(response.createTechnology.color.rgb).toEqual(Technology.color.rgb);
  });

  // ██╗   ██╗██████╗ ██████╗  █████╗ ████████╗███████╗
  // ██║   ██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
  // ██║   ██║██████╔╝██║  ██║███████║   ██║   █████╗  
  // ██║   ██║██╔═══╝ ██║  ██║██╔══██║   ██║   ██╔══╝  
  // ╚██████╔╝██║     ██████╔╝██║  ██║   ██║   ███████╗
  //  ╚═════╝ ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝                                         

  test('can update an existing Technology', async () => {
    const Technology = fakeTechnology();

    const mutation = gql`
      mutation createTechnology {
        createTechnology(
          name: "${Technology.name}",
          image: {
            create: {
              url: "${Technology.image.url}"
              title: "${Technology.image.title}"
              caption: "${Technology.image.caption}"
            }
          }
          color: {
            create: {
              type: ${Technology.color.type}
              shade: ${Technology.color.shade}
              hex: "${Technology.color.hex}"
              rgb: "${Technology.color.rgb}"
            }
          }
        ) {
          id
          name
          image {
            url
            title
            caption
          }
          color {
            type
            shade
            hex
            rgb
          }
        }
      }
    `;

    const response = await request(global.HOST, print(mutation))

    expect(response).toBeDefined();
    expect(response.createTechnology.id).toBeDefined();

    Technology.id = response.createTechnology.id;
    Technology.name = 'Next.js';
    Technology.color = {
      type: 'PRIMARY',
      shade: 'LIGHT',
      hex: '#007BFA',
      rgb: 'rgb(0, 123, 250)'
    };

    const updateMutation = gql`
      mutation updateTechnology {
        updateTechnology(
          id: "${Technology.id}"
          name: "${Technology.name}"
          color: {
            create: {
              type: ${Technology.color.type}
              shade: ${Technology.color.shade}
              hex: "${Technology.color.hex}"
              rgb: "${Technology.color.rgb}"
            }
          }
        ) {
          id
          name
          image {
            url
            title
            caption
          }
          color {
            type
            shade
            hex
            rgb
          }
        }
      }
    `;

    const updateResponse = await request(global.HOST, print(updateMutation));

    expect(updateResponse).toBeDefined();
    expect(updateResponse.updateTechnology.id).toEqual(Technology.id);
    expect(updateResponse.updateTechnology.name).toEqual(Technology.name);
    expect(updateResponse.updateTechnology.image.url).toEqual(Technology.image.url);
    expect(updateResponse.updateTechnology.image.title).toEqual(Technology.image.title);
    expect(updateResponse.updateTechnology.image.caption).toEqual(Technology.image.caption);
    expect(updateResponse.updateTechnology.color.type).toEqual(Technology.color.type);
    expect(updateResponse.updateTechnology.color.shade).toEqual(Technology.color.shade);
    expect(updateResponse.updateTechnology.color.hex).toEqual(Technology.color.hex);
    expect(updateResponse.updateTechnology.color.rgb).toEqual(Technology.color.rgb);
  });

  // ██████╗ ███████╗██╗     ███████╗████████╗███████╗
  // ██╔══██╗██╔════╝██║     ██╔════╝╚══██╔══╝██╔════╝
  // ██║  ██║█████╗  ██║     █████╗     ██║   █████╗  
  // ██║  ██║██╔══╝  ██║     ██╔══╝     ██║   ██╔══╝  
  // ██████╔╝███████╗███████╗███████╗   ██║   ███████╗
  // ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝

  test('can delete one Technology', async () => {
    const Technology = fakeTechnology();

    const mutation = gql`
      mutation createTechnology {
        createTechnology(
          name: "${Technology.name}",
          image: {
            create: {
              url: "${Technology.image.url}"
              title: "${Technology.image.title}"
              caption: "${Technology.image.caption}"
            }
          }
          color: {
            create: {
              type: ${Technology.color.type}
              shade: ${Technology.color.shade}
              hex: "${Technology.color.hex}"
              rgb: "${Technology.color.rgb}"
            }
          }
        ) {
          id
          name
          image {
            url
            title
            caption
          }
          color {
            type
            shade
            hex
            rgb
          }
        }
      }
    `;

    const response = await request(global.HOST, print(mutation))

    expect(response).toBeDefined();
    expect(response.createTechnology.id).toBeDefined();

    Technology.id = response.createTechnology.id;

    const deleteMutation = gql`
      mutation deleteTechnology {
        deleteTechnology(
          id: "${Technology.id}"
        ) {
          id
        }
      }
    `;

    const deleteResponse = await request(global.HOST, print(deleteMutation));

    expect(deleteResponse).toBeTruthy();
    expect(deleteResponse.deleteTechnology.id).toEqual(Technology.id);
  });
});


describe('Technology Resolvers: Queries', () => {

  // ███████╗██╗███╗   ██╗██████╗      █████╗ ██╗     ██╗     
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔══██╗██║     ██║     
  // █████╗  ██║██╔██╗ ██║██║  ██║    ███████║██║     ██║     
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██╔══██║██║     ██║     
  // ██║     ██║██║ ╚████║██████╔╝    ██║  ██║███████╗███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝  ╚═╝╚══════╝╚══════╝

  test('can query all Technology', async () => {
    const mutations = [];
    const numMutations = 4;

    for (let i = 0; i < numMutations; i++) {
      const Technology = fakeTechnology();
      
      mutations.push(gql`
        mutation {
          createTechnology(
            name: "${Technology.name}",
            image: {
              create: {
                url: "${Technology.image.url}"
                title: "${Technology.image.title}"
                caption: "${Technology.image.caption}"
              }
            }
            color: {
              create: {
                type: ${Technology.color.type}
                shade: ${Technology.color.shade}
                hex: "${Technology.color.hex}"
              }
            }
          ) {
            id
            name
            image {
              url
              title
              caption
            }
            color {
              type
              shade
              hex
            }
          }
        }
      `);
    }

    await Promise.each(mutations, async (mutation) => {
      const mutationResponse = await request(global.HOST, print(mutation));
      expect(mutationResponse).toBeTruthy();
    });

    const query = gql`
      query {
        pages {
          id
          route
          style {
            shape
            colors {
              shade
            }
          }
        }
      }
    `;

    const queryResponse = await request(global.HOST, print(query));
    expect(queryResponse).toBeTruthy();
    expect(queryResponse.pages.length).toBeGreaterThanOrEqual(numMutations);
  });

  // ███████╗██╗███╗   ██╗██████╗      ██████╗ ███╗   ██╗███████╗
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔═══██╗████╗  ██║██╔════╝
  // █████╗  ██║██╔██╗ ██║██║  ██║    ██║   ██║██╔██╗ ██║█████╗  
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██║   ██║██║╚██╗██║██╔══╝  
  // ██║     ██║██║ ╚████║██████╔╝    ╚██████╔╝██║ ╚████║███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝

  test('can query one Technology', async () => {
    const Technology = fakeTechnology();

    const mutation = gql`
      mutation createTechnology {
        createTechnology(
          name: "${Technology.name}",
          image: {
            create: {
              url: "${Technology.image.url}"
              title: "${Technology.image.title}"
              caption: "${Technology.image.caption}"
            }
          }
          color: {
            create: {
              type: ${Technology.color.type}
              shade: ${Technology.color.shade}
              hex: "${Technology.color.hex}"
              rgb: "${Technology.color.rgb}"
            }
          }
        ) {
          id
          name
          image {
            url
            title
            caption
          }
          color {
            type
            shade
            hex
            rgb
          }
        }
      }
    `;

    const response = await request(global.HOST, print(mutation))

    expect(response).toBeDefined();
    expect(response.createTechnology.id).toBeDefined();
    expect(response.createTechnology.name).toEqual(Technology.name);
    expect(response.createTechnology.image.url).toEqual(Technology.image.url);
    expect(response.createTechnology.image.title).toEqual(Technology.image.title);
    expect(response.createTechnology.image.caption).toEqual(Technology.image.caption);
    expect(response.createTechnology.color.type).toEqual(Technology.color.type);
    expect(response.createTechnology.color.shade).toEqual(Technology.color.shade);
    expect(response.createTechnology.color.hex).toEqual(Technology.color.hex);
    expect(response.createTechnology.color.rgb).toEqual(Technology.color.rgb);

    Technology.id = response.createTechnology.id;

    const query = gql`
      query findOneTechnology {
        technology(
          where: {
            id: "${Technology.id}"
          }
        ) {
          id
          name
          image {
            url
            title
            caption
          }
          color {
            type
            shade
            hex
            rgb
          }
        }
      }
    `;

    const queryResponse = await request(global.HOST, print(query));

    expect(queryResponse).toBeDefined();
    expect(queryResponse.technology.id).toBeDefined();
    expect(queryResponse.technology.name).toEqual(Technology.name);
    expect(queryResponse.technology.image.url).toEqual(Technology.image.url);
    expect(queryResponse.technology.image.title).toEqual(Technology.image.title);
    expect(queryResponse.technology.image.caption).toEqual(Technology.image.caption);
    expect(queryResponse.technology.color.type).toEqual(Technology.color.type);
    expect(queryResponse.technology.color.shade).toEqual(Technology.color.shade);
    expect(queryResponse.technology.color.hex).toEqual(Technology.color.hex);
    expect(queryResponse.technology.color.rgb).toEqual(Technology.color.rgb);
  });
});