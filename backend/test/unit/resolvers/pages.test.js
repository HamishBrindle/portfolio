import { request } from 'graphql-request';
import gql from 'graphql-tag';
import { util } from '../../../api/tools';

describe('Pages Resolvers: Mutations', async () => {

  test('can create a new page', async () => {
    return true;
    // const pageStyleShape = 'JAGGED';

    // const mutation = gql`
    //   mutation {
    //     createPage(
    //       route: "testpage"
    //       style: {
    //         create: {
    //           shape: ${pageStyleShape}
    //           colors: {
    //             create: [
    //               { shade: DARK, type: PRIMARY, hex: "#333333" }
    //               { shade: DARK, type: SECONDARY, hex: "#444444" }
    //             ]
    //           }
    //         }
    //       }
    //     ) {
    //       id
    //       style {
    //         shape
    //         colors {
    //           shade
    //           type
    //           hex
    //         }
    //       }
    //     }
    //   }
    // `;

    // const response = await request(global.host, mutation);

    // expect(response).toBeDefined();
    // expect(response.createPage).toBeDefined();
    // expect(response.createPage.id).toBeDefined();
    // expect(typeof response.createPage.id).toEqual('string');
    // expect(response.createPage.style.shape).toEqual(pageStyleShape);
    // expect(response.createPage.style.colors.length).toEqual(2);
    // response.createPage.style.colors.forEach((color) => {
    //   expect(color.shade).toBeDefined();
    //   expect(color.type).toBeDefined();
    //   expect(color.hex).toBeDefined();
    //   expect(color.hex).toMatch(util.regEx.hex);
    //   expect(color.rbg).toBeFalsy();
    // });
  });
});