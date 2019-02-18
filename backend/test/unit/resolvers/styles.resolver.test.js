import { request } from 'graphql-request';
import { gql } from 'apollo-server-express';
import { print } from 'graphql/language/printer';
import { util } from '../../../api/tools';
import { fakeStyle, fakeColor } from '../../mock';
import * as Promise from 'bluebird';

describe('Style Resolvers: Mutations', async () => {

  //  ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗
  // ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
  // ██║     ██████╔╝█████╗  ███████║   ██║   █████╗  
  // ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝  
  // ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗
  //  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

  test('can create a new Style', async () => {
    const numColor = 4;
    const Style = fakeStyle(numColor);
    const colorsCreate = [];

    for (let i = 0; i < numColor; i++) {
      colorsCreate.push(`{
        shade: ${Style.color[i].shade}
        type: ${Style.color[i].type}
        hex: "${Style.color[i].hex}"
        rgb: "${Style.color[i].rgb}"
      }`)
    }

    const mutation = gql`
      mutation createStyle {
        createStyle(
          shape: ${Style.shape}
          colors: {
            create: [
              ${colorsCreate.join(', ')}
            ]
          }
        ) {
          id
          shape
          colors {
            shade
            type
            hex
            rgb
          }
        }
      }
    `;

    const response = await request(global.HOST, print(mutation));

    expect(response.createStyle.shape).toEqual(Style.shape);
    expect(response.createStyle.colors.length).toEqual(numColor);
    response.createStyle.colors.forEach((color, index) => {
      expect(color.shade).toEqual(Style.color[index].shade);
      expect(color.type).toEqual(Style.color[index].type);
      expect(color.hex).toEqual(Style.color[index].hex);
      expect(color.hex).toMatch(util.regEx.hex);
      expect(color.rgb).toEqual(Style.color[index].rgb);
    });
  });

  // ██╗   ██╗██████╗ ██████╗  █████╗ ████████╗███████╗
  // ██║   ██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
  // ██║   ██║██████╔╝██║  ██║███████║   ██║   █████╗  
  // ██║   ██║██╔═══╝ ██║  ██║██╔══██║   ██║   ██╔══╝  
  // ╚██████╔╝██║     ██████╔╝██║  ██║   ██║   ███████╗
  //  ╚═════╝ ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝                                         

  test('can update an existing Style', async () => {
    const numColor = 4;
    const Style = fakeStyle(numColor);

    const colorsCreate = [];
    for (let i = 0; i < numColor; i++) {
      colorsCreate.push(`{
        shade: ${Style.color[i].shade}
        type: ${Style.color[i].type}
        hex: "${Style.color[i].hex}"
        rgb: "${Style.color[i].rgb}"
      }`)
    }

    const mutation = gql`
      mutation createStyle {
        createStyle(
          shape: ${Style.shape}
          colors: {
            create: [
              ${colorsCreate.join(', ')}
            ]
          }
        ) {
          id
          shape
          colors {
            id
            shade
            type
            hex
            rgb
          }
        }
      }
    `;

    const response = await request(global.HOST, print(mutation));

    expect(response).toBeDefined();
    expect(response.createStyle.id).toBeDefined();
    expect(response.createStyle.shape).toEqual(Style.shape);
    expect(response.createStyle.colors.length).toEqual(numColor);
    response.createStyle.colors.forEach((color, index) => {
      expect(color.shade).toEqual(Style.color[index].shade);
      expect(color.type).toEqual(Style.color[index].type);
      expect(color.hex).toEqual(Style.color[index].hex);
      expect(color.hex).toMatch(util.regEx.hex);
      expect(color.rgb).toEqual(Style.color[index].rgb);

      Style.color[index].id = color.id;
    });

    Style.id = response.createStyle.id;

    const newColorsCreate = [];
    for (let i = 0; i < numColor; i++) {
      let newColor = fakeColor();
      delete newColor.id;
      newColorsCreate.push(`{
        where: {
          id: "${Style.color[i].id}"
        }
        data: {
          shade: ${newColor.shade}
          type: ${newColor.type}
          hex: "${newColor.hex}"
          rgb: "${newColor.rgb}"
        }
      }`);
      Style.color[i].shade = newColor.shade;
      Style.color[i].type = newColor.type;
      Style.color[i].hex = newColor.hex;
      Style.color[i].rgb = newColor.rgb;
    }
    
    const updateMutation = gql`
      mutation updateStyle {
        updateStyle(
          id: "${Style.id}"
          shape: ${Style.shape}
          colors: {
            update: [
              ${newColorsCreate.join(',')}
            ]
          }
        ) {
          id
          shape
          colors {
            shade
            type
            hex
            rgb
          }
        }
      }
    `;

    const updateResponse = await request(global.HOST, print(updateMutation));

    expect(updateResponse).toBeDefined();
    expect(updateResponse.updateStyle.id).toBeDefined();
    expect(updateResponse.updateStyle.shape).toEqual(Style.shape);
    expect(updateResponse.updateStyle.colors.length).toEqual(numColor);
    updateResponse.updateStyle.colors.forEach((color, index) => {
      expect(color.shade).toEqual(Style.color[index].shade);
      expect(color.type).toEqual(Style.color[index].type);
      expect(color.hex).toEqual(Style.color[index].hex);
      expect(color.hex).toMatch(util.regEx.hex);
      expect(color.rgb).toEqual(Style.color[index].rgb);
    });
  });

  // ██████╗ ███████╗██╗     ███████╗████████╗███████╗
  // ██╔══██╗██╔════╝██║     ██╔════╝╚══██╔══╝██╔════╝
  // ██║  ██║█████╗  ██║     █████╗     ██║   █████╗  
  // ██║  ██║██╔══╝  ██║     ██╔══╝     ██║   ██╔══╝  
  // ██████╔╝███████╗███████╗███████╗   ██║   ███████╗
  // ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝

  test('can delete one Style', async () => {
    const numColor = 4;
    const Style = fakeStyle(numColor);
    const colorsCreate = [];

    for (let i = 0; i < numColor; i++) {
      colorsCreate.push(`{
        shade: ${Style.color[i].shade}
        type: ${Style.color[i].type}
        hex: "${Style.color[i].hex}"
        rgb: "${Style.color[i].rgb}"
      }`)
    }

    const mutation = gql`
      mutation createStyle {
        createStyle(
          shape: ${Style.shape}
          colors: {
            create: [
              ${colorsCreate.join(', ')}
            ]
          }
        ) {
          id
          shape
          colors {
            shade
            type
            hex
            rgb
          }
        }
      }
    `;

    const response = await request(global.HOST, print(mutation));

    expect(response).toBeDefined();
    expect(response.createStyle).toBeDefined();
    
    Style.id = response.createStyle.id;

    const deleteMutation = gql`
      mutation {
        deleteStyle(
          id: "${Style.id}"
        ) {
          id
          shape
          colors {
            shade
            type
            hex
            rgb
          }
        }
      }
    `;

    const deleteResponse = await request(global.HOST, print(deleteMutation));

    expect(deleteResponse.deleteStyle.shape).toEqual(Style.shape);
    expect(deleteResponse.deleteStyle.colors.length).toEqual(0);
    deleteResponse.deleteStyle.colors.forEach((color, index) => {
      expect(color.shade).toEqual(Style.color[index].shade);
      expect(color.type).toEqual(Style.color[index].type);
      expect(color.hex).toEqual(Style.color[index].hex);
      expect(color.hex).toMatch(util.regEx.hex);
      expect(color.rgb).toEqual(Style.color[index].rgb);
    });
  });
});


describe('Style Resolvers: Queries', async () => {

  // ███████╗██╗███╗   ██╗██████╗      █████╗ ██╗     ██╗     
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔══██╗██║     ██║     
  // █████╗  ██║██╔██╗ ██║██║  ██║    ███████║██║     ██║     
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██╔══██║██║     ██║     
  // ██║     ██║██║ ╚████║██████╔╝    ██║  ██║███████╗███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝  ╚═╝╚══════╝╚══════╝

  test('can query all Style', async () => {
    const mutations = [];
    const numMutations = 4;
    const numColor = 4;

    for (let i = 0; i < numMutations; i++) {
      const Style = fakeStyle(numColor);
      const colorsCreate = [];
      for (let i = 0; i < numColor; i++) {
        colorsCreate.push(`{
          shade: ${Style.color[i].shade}
          type: ${Style.color[i].type}
          hex: "${Style.color[i].hex}"
          rgb: "${Style.color[i].rgb}"
        }`)
      }
      
      mutations.push(gql`
        mutation createStyle {
          createStyle(
            shape: ${Style.shape}
            colors: {
              create: [
                ${colorsCreate.join(', ')}
              ]
            }
          ) {
            id
            shape
            colors {
              shade
              type
              hex
              rgb
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
        styles {
          id
          shape
          colors {
            shade
            type
            hex
            rgb
          }
        }
      }
    `;

    const queryResponse = await request(global.HOST, print(query));
    expect(queryResponse).toBeTruthy();
    expect(queryResponse.styles.length).toBeGreaterThanOrEqual(numMutations);
  });

  // ███████╗██╗███╗   ██╗██████╗      ██████╗ ███╗   ██╗███████╗
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔═══██╗████╗  ██║██╔════╝
  // █████╗  ██║██╔██╗ ██║██║  ██║    ██║   ██║██╔██╗ ██║█████╗  
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██║   ██║██║╚██╗██║██╔══╝  
  // ██║     ██║██║ ╚████║██████╔╝    ╚██████╔╝██║ ╚████║███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝

  test('can query one Style', async () => {
    const numColor = 4;
    const Style = fakeStyle(numColor);
    const colorsCreate = [];

    for (let i = 0; i < numColor; i++) {
      colorsCreate.push(`{
        shade: ${Style.color[i].shade}
        type: ${Style.color[i].type}
        hex: "${Style.color[i].hex}"
        rgb: "${Style.color[i].rgb}"
      }`)
    }

    const mutation = gql`
      mutation createStyle {
        createStyle(
          shape: ${Style.shape}
          colors: {
            create: [
              ${colorsCreate.join(', ')}
            ]
          }
        ) {
          id
          shape
          colors {
            shade
            type
            hex
            rgb
          }
        }
      }
    `;

    const response = await request(global.HOST, print(mutation));

    expect(response).toBeDefined();
    expect(response.createStyle).toBeDefined();

    Style.id = response.createStyle.id;

    const query = gql`
      query {
        style(
          where: {
            id: "${Style.id}"
          }
        ) {
          id
          shape
          colors {
            shade
            type
            hex
            rgb
          }
        }
      }
    `;

    const queryResponse = await request(global.HOST, print(query));

    expect(queryResponse.style.shape).toEqual(Style.shape);
    expect(queryResponse.style.colors.length).toEqual(numColor);
    queryResponse.style.colors.forEach((color, index) => {
      expect(color.shade).toEqual(Style.color[index].shade);
      expect(color.type).toEqual(Style.color[index].type);
      expect(color.hex).toEqual(Style.color[index].hex);
      expect(color.hex).toMatch(util.regEx.hex);
      expect(color.rgb).toEqual(Style.color[index].rgb);
    });
  });
});