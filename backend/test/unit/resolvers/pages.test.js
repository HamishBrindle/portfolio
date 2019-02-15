import { request } from 'graphql-request';
import gql from 'graphql-tag';
import shortid from 'shortid';
import { util } from '../../../api/tools';


describe('Pages Resolvers: Mutations', async () => {

  //  ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗
  // ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
  // ██║     ██████╔╝█████╗  ███████║   ██║   █████╗  
  // ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝  
  // ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗
  //  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

  test('can create a new page', async () => {
    const pageStyleShape = 'JAGGED';

    const mutation = gql`
      mutation {
        createPage(
          route: "testpage"
          style: {
            create: {
              shape: ${pageStyleShape}
              colors: {
                create: [
                  { shade: DARK, type: PRIMARY, hex: "#333333" }
                  { shade: DARK, type: SECONDARY, hex: "#444444" }
                ]
              }
            }
          }
        ) {
          id
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
    `;

    const response = await request(global.host, mutation);

    expect(response).toBeDefined();
    expect(response.createPage).toBeDefined();
    expect(response.createPage.id).toBeDefined();
    expect(typeof response.createPage.id).toEqual('string');
    expect(response.createPage.style.shape).toEqual(pageStyleShape);
    expect(response.createPage.style.colors.length).toEqual(2);
    response.createPage.style.colors.forEach((color) => {
      expect(color.shade).toBeDefined();
      expect(color.type).toBeDefined();
      expect(color.hex).toBeDefined();
      expect(color.hex).toMatch(util.regEx.hex);
      expect(color.rbg).toBeFalsy();
    });
  });

  // ██╗   ██╗██████╗ ██████╗  █████╗ ████████╗███████╗
  // ██║   ██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
  // ██║   ██║██████╔╝██║  ██║███████║   ██║   █████╗  
  // ██║   ██║██╔═══╝ ██║  ██║██╔══██║   ██║   ██╔══╝  
  // ╚██████╔╝██║     ██████╔╝██║  ██║   ██║   ███████╗
  //  ╚═════╝ ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝                                         

  test('can update an existing page', async () => {
    const pageRoute = 'projects/testpage';
    const pageStyleShape = 'JAGGED';

    const mutation = gql`
      mutation {
        createPage(
          route: "${pageRoute}"
          style: {
            create: {
              shape: ${pageStyleShape}
              colors: {
                create: [
                  { shade: LIGHT, type: PRIMARY, hex: "#333333" }
                  { shade: LIGHT, type: SECONDARY, hex: "#444444" }
                ]
              }
            }
          }
        ) {
          id
          route
          style {
            shape
            colors {
              id
              shade
              type
              hex
            }
          }
        }
      }
    `;

    const response = await request(global.host, mutation);

    expect(response).toBeDefined();
    expect(response.createPage).toBeDefined();
    expect(response.createPage.id).toBeDefined();
    expect(response.createPage.style.shape).toEqual(pageStyleShape);
    expect(response.createPage.route).toEqual(pageRoute);

    const pageId = response.createPage.id;
    const pageStyleColorsOneId = response.createPage.style.colors[0].id;
    const pageStyleColorsTwoId = response.createPage.style.colors[1].id;
    const newPageRoute = 'projects/sourcremery';
    const newPageStyleShape = 'SQUARE';
    const newPageStyleColorShade = 'DARK';

    const updateMutation = gql`
      mutation {
        updatePage(
          id: "${pageId}"
          route: "${newPageRoute}"
          style: {
            update: {
              shape: ${newPageStyleShape}
              colors: {
                update: [{
                  where: {
                    id: "${pageStyleColorsOneId}"
                  },
                  data: {
                    shade: ${newPageStyleColorShade}, type: PRIMARY, hex: "#E9B44C", rgb: "rgb(233, 180, 76)"
                  }
                }, {
                  where: {
                    id: "${pageStyleColorsTwoId}"
                  },
                  data: {
                    shade: ${newPageStyleColorShade}, type: SECONDARY, hex: "#9B2915", rgb: "rgb(155, 41, 21)"
                  }
                }]
              }
            }
          }
        ) {
          id
          route
          style {
            shape
            colors {
              shade
              type
              hex
              rgb
            }
          }
        }
      }
    `;

    const updateResponse = await request(global.host, updateMutation);

    expect(typeof updateResponse.updatePage.id).toEqual('string');
    expect(updateResponse.updatePage.route).toEqual(newPageRoute);
    expect(updateResponse.updatePage.style.shape).toEqual(newPageStyleShape);
    expect(updateResponse.updatePage.style.colors.length).toEqual(2);
    updateResponse.updatePage.style.colors.forEach((color) => {
      expect(color.shade).toEqual(newPageStyleColorShade);
      expect(color.type).toBeDefined();
      expect(color.hex).toBeDefined();
      expect(color.hex).toMatch(util.regEx.hex);
      expect(color.rgb).toBeTruthy();
    });
  });

  // ██████╗ ███████╗██╗     ███████╗████████╗███████╗
  // ██╔══██╗██╔════╝██║     ██╔════╝╚══██╔══╝██╔════╝
  // ██║  ██║█████╗  ██║     █████╗     ██║   █████╗  
  // ██║  ██║██╔══╝  ██║     ██╔══╝     ██║   ██╔══╝  
  // ██████╔╝███████╗███████╗███████╗   ██║   ███████╗
  // ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝

  test('can delete one page', async () => {
    const pageRoute = 'projects/testpage';
    const mutation = gql`
      mutation {
        createPage(
          route: "${pageRoute}"
          style: {
            create: {
              shape: ROUND
              colors: {
                create: [
                  { shade: LIGHT, type: PRIMARY, hex: "#333333" }
                  { shade: LIGHT, type: SECONDARY, hex: "#444444" }
                ]
              }
            }
          }
        ) {
          id
          route
        }
      }
    `;

    const mutationResponse = await request(global.host, mutation);

    expect(mutationResponse.createPage.id).toBeTruthy();
    expect(mutationResponse.createPage.route).toEqual(pageRoute);

    const pageId = mutationResponse.createPage.id;

    const deleteMutation = gql`
      mutation {
        deletePage(
          id: "${pageId}"
        ) {
          id
        }
      }
    `;

    const deleteResponse = await request(global.host, deleteMutation);

    expect(deleteResponse).toBeTruthy();
    expect(deleteResponse.deletePage.id).toEqual(pageId);
  });
});


describe('Pages Resolvers: Queries', async () => {

  // ███████╗██╗███╗   ██╗██████╗      █████╗ ██╗     ██╗     
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔══██╗██║     ██║     
  // █████╗  ██║██╔██╗ ██║██║  ██║    ███████║██║     ██║     
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██╔══██║██║     ██║     
  // ██║     ██║██║ ╚████║██████╔╝    ██║  ██║███████╗███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝  ╚═╝╚══════╝╚══════╝

  test('can query all pages', async () => {
    const mutations = [];
    for (let i = 0; i < 4; i++) {
      mutations.push(gql`
        mutation {
          createPage(
            route: "${shortid.generate()}"
            style: {
              create: {
                shape: ROUND
                colors: {
                  create: [
                    { shade: LIGHT, type: PRIMARY, hex: "#333333" }
                    { shade: LIGHT, type: SECONDARY, hex: "#444444" }
                  ]
                }
              }
            }
          ) {
            id
            route
          }
        }
      `);
    }

    mutations.forEach(async (mutation) => {
      const mutationResponse = await request(global.host, mutation);
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

    const queryResponse = await request(global.host, query);
    expect(queryResponse).toBeTruthy();
    expect(queryResponse.pages.length).toBeGreaterThanOrEqual(4);
  });

  // ███████╗██╗███╗   ██╗██████╗      ██████╗ ███╗   ██╗███████╗
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔═══██╗████╗  ██║██╔════╝
  // █████╗  ██║██╔██╗ ██║██║  ██║    ██║   ██║██╔██╗ ██║█████╗  
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██║   ██║██║╚██╗██║██╔══╝  
  // ██║     ██║██║ ╚████║██████╔╝    ╚██████╔╝██║ ╚████║███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝

  test('can query one page', async () => {
    const page = {
      route: shortid.generate()
    };

    const mutation = gql`
      mutation {
        createPage(
          route: "${page.route}"
          style: {
            create: {
              shape: ROUND
              colors: {
                create: [
                  { shade: LIGHT, type: PRIMARY, hex: "#333333" }
                  { shade: LIGHT, type: SECONDARY, hex: "#444444" }
                ]
              }
            }
          }
        ) {
          id
          route
        }
      }
    `;

    const mutationResponse = await request(global.host, mutation);

    expect(mutationResponse).toBeTruthy();
    expect(mutationResponse.createPage.route).toEqual(page.route);

    const pageId = mutationResponse.createPage.id;

    const query = gql`
      query {
        page(
          where: {
            id: "${pageId}"
          }
        ) {
          id
          route
          style {
            shape
          }
        }
      }
    `;

    const queryResponse = await request(global.host, query);

    expect(queryResponse).toBeTruthy();
    expect(queryResponse.page.route).toEqual(page.route);
    expect(queryResponse.page.style).toBeTruthy();
  });
});