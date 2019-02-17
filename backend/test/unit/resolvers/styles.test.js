import { request } from 'graphql-request';
import gql from 'graphql-tag';
import { util } from '../../../api/tools';
import { fakeStyle } from '../../mock';

describe('Style Resolvers: Mutations', async () => {

  //  ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗
  // ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
  // ██║     ██████╔╝█████╗  ███████║   ██║   █████╗  
  // ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝  
  // ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗
  //  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

  test.only('can create a new Style', async () => {
    const numColor = 4;
    const Style = fakeStyle(numColor);

    console.log('FAKE STYLE', Style)

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

    const response = await request(global.host, mutation);

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
    return true;    
  });

  // ██████╗ ███████╗██╗     ███████╗████████╗███████╗
  // ██╔══██╗██╔════╝██║     ██╔════╝╚══██╔══╝██╔════╝
  // ██║  ██║█████╗  ██║     █████╗     ██║   █████╗  
  // ██║  ██║██╔══╝  ██║     ██╔══╝     ██║   ██╔══╝  
  // ██████╔╝███████╗███████╗███████╗   ██║   ███████╗
  // ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝

  test('can delete one Style', async () => {
    return true;    
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
    return true; 
  });

  // ███████╗██╗███╗   ██╗██████╗      ██████╗ ███╗   ██╗███████╗
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔═══██╗████╗  ██║██╔════╝
  // █████╗  ██║██╔██╗ ██║██║  ██║    ██║   ██║██╔██╗ ██║█████╗  
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██║   ██║██║╚██╗██║██╔══╝  
  // ██║     ██║██║ ╚████║██████╔╝    ╚██████╔╝██║ ╚████║███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝

  test('can query one Style', async () => {
    return true;    
  });
});