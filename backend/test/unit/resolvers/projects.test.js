import { request } from 'graphql-request';
import gql from 'graphql-tag';
import shortid from 'shortid';

import imagesService from '../../../api/services/images';

const regEx = {
  enum: /[A-Z]+/,
  image: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
  hex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
};

describe('Projects Resolvers: Mutations', async () => {

  test('can create a new project with only required parameters', async () => {
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

  test('can create a new project with all the fixin\'s', async () => {
    const projectName = 'Gigantic Project';
    const projectDescription = 'This is a description of a project with all the fixin\'s, baby.';
    const projectPageRoute = 'projects/firsttestproject';
    const projectPageStyleShape = 'ROUND';
    const projectStartDate = "2019-04-23";
    const projectFinishDate = '2019-06-25';

    const mutation = gql`
      mutation {
        createProject(
          name: "${projectName}"
          description: "${projectDescription}"
          page: {
            create: {
              route: "${projectPageRoute}"
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
          projectImages: {
            create: [
              {
                type: PRIMARY
                image: {
                  create: {
                    url: "https://images.tmz.com/2019/01/24/0124-kanye-west-tmz-3.jpg"
                    title: "Kanye Shocked"
                    caption: "Ye seen some shit"
                  }
                }
              }
              {
                type: SECONDARY
                image: {
                  create: {
                    url: "https://timedotcom.files.wordpress.com/2018/10/gettyimages-1051894352.jpg"
                    title: "MAGA Ye"
                    caption: "Ye being sus"
                  }
                }
              }
            ]
          }
          tags: {
            set: [
              "programming", "backend", "frontend", "design"
            ]
          }
          technologies: {
            create: [{
              name: "React"
              image: {
                create: {
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  title: "React logo"
                  caption: "React logo"
                }
              }
              color: { create: { shade: DARK, type: PRIMARY, hex: "#748734" } }
            }, {
              name: "GraphQL"
              image: {
                create: {
                  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2000px-GraphQL_Logo.svg.png"
                  title: "GraphQL logo"
                  caption: "GraphQL logo"
                }
              }
              color: { create: { shade: DARK, type: PRIMARY, hex: "#993874" } }
            }]
          }
          startDate: "2019-04-23"
          finishDate: "2019-06-25"
          
        ) {
          id
          name
          description
          page {
            route
            style {
              shape
              colors {
                type
                shade
                hex
                rgb
              }
            }
          }
          projectImages {
            image {
              title
              url
              caption
            }
            type
          }
          tags
          technologies {
            name
            image {
              title
              url
              caption
            }
            color {
              type
              shade
              hex
              rgb
            }
          }
          startDate
          finishDate
        }
      }
    `;

    const response = await request(global.host, mutation);

    // Response and mutation
    expect(response).toBeDefined();
    expect(response.createProject).toBeDefined();

    // ID, description and name
    expect(response.createProject.id).toBeDefined();
    expect(response.createProject.name).toEqual(projectName);
    expect(response.createProject.description).toEqual(projectDescription);

    // Page
    expect(response.createProject.page).toBeDefined();
    expect(response.createProject.page.route).toEqual(projectPageRoute);
    expect(response.createProject.page.style).toBeDefined();
    expect(response.createProject.page.style.shape).toEqual(projectPageStyleShape);
    expect(response.createProject.page.style.colors.length).toEqual(2);
    response.createProject.page.style.colors.forEach((color) => {
      expect(color.shade).toBeDefined();
      expect(color.type).toBeDefined();
      expect(color.hex).toBeDefined();
      expect(color.hex).toMatch(regEx.hex);
      expect(color.rbg).toBeFalsy();
    });

    // Project Images
    expect(response.createProject.projectImages.length).toEqual(2);
    response.createProject.projectImages.forEach((projImg) => {
      expect(projImg.type).toMatch(regEx.enum);
      expect(projImg.image).toBeDefined();
      expect(projImg.image.url).toMatch(regEx.image);
      expect(projImg.image.title.length).toBeGreaterThan(0);
      expect(projImg.image.caption.length).toBeGreaterThan(0);
    });

    // Tags
    expect(response.createProject.tags).toBeDefined();
    expect(response.createProject.tags.length).toEqual(4);
    response.createProject.tags.forEach((tag) => {
      expect(typeof tag).toEqual('string');
      expect(tag.length).toBeGreaterThan(0);
    });

    // Technologies
    expect(response.createProject.technologies.length).toEqual(2);
    expect(response.createProject.technologies).toBeDefined();
    response.createProject.technologies.forEach((tech) => {
      expect(typeof tech.name).toEqual('string');
      expect(tech.name.length).toBeGreaterThan(0);
      expect(tech.image).toBeDefined();
      for (const key in tech.image) {
        if (tech.image.hasOwnProperty(key)) {
          expect(typeof tech.image[key]).toEqual('string');
          expect(tech.image[key].length).toBeGreaterThan(0);
        }
      }
      expect(tech.color).toBeDefined();
      expect(tech.color.shade).toBeDefined();
      expect(tech.color.type).toBeDefined();
      expect(tech.color.type).toBeDefined();
    });

    // Dates
    expect(response.createProject.startDate).toContain(projectStartDate);
    expect(response.createProject.finishDate).toContain(projectFinishDate);
  });
});

describe('Projects Resolvers: Queries', async () => {

  test('can query all projects', async () => {
    const mutations = [];
    for (let i = 0; i < 6; i++) {
      mutations.push(gql`
        mutation {
          createProject(
            name: "${shortid.generate()}"
            description: "${shortid.generate()}"
          ) {
            id
          }
        }
      `);
    }

    mutations.forEach(async (mutation) => {
      const mutationResponse = await request(global.host, mutation);
      expect(mutationResponse).toBeTruthy();
    });

    const query = gql`
      query getProjects {
        projects {
          id
          name
        }
      }
    `;

    const queryResponse = await request(global.host, query);
    expect(queryResponse).toBeTruthy();
    console.log('queryResponse:', queryResponse);
  });

});