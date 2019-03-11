import { request } from 'graphql-request';
import { gql } from 'apollo-server-express';
import { print } from 'graphql/language/printer';
import shortid from 'shortid';
import { util } from '../../../api/tools';
import * as Promise from 'bluebird';
                                                                            
describe('Projects Resolvers: Mutations', () => {

  //  ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗
  // ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
  // ██║     ██████╔╝█████╗  ███████║   ██║   █████╗  
  // ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝  
  // ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗
  //  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                                   
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

    const response = await request(global.HOST, print(mutation));

    expect(response).toBeDefined();
    expect(response.createProject).toBeDefined();
    expect(response.createProject.id).toBeDefined();
    expect(typeof response.createProject.id).toEqual('string');
    expect(response.createProject.name).toEqual(projectName);
    expect(response.createProject.description).toEqual(projectDescription);
    expect(response.createProject.page.style.shape).toEqual(projectPageStyleShape);
    expect(response.createProject.page.style.colors.length).toEqual(2);
  });

  //  ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗    ██████╗ ██╗ ██████╗ 
  // ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝    ██╔══██╗██║██╔════╝ 
  // ██║     ██████╔╝█████╗  ███████║   ██║   █████╗      ██████╔╝██║██║  ███╗
  // ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝      ██╔══██╗██║██║   ██║
  // ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗    ██████╔╝██║╚██████╔╝
  //  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝    ╚═════╝ ╚═╝ ╚═════╝ 
                                                                           
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

    const response = await request(global.HOST, print(mutation));

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
      expect(color.hex).toMatch(util.regEx.hex);
      expect(color.rgb).toBeFalsy();
    });

    // Project Images
    expect(response.createProject.projectImages.length).toEqual(2);
    response.createProject.projectImages.forEach((projImg) => {
      expect(projImg.type).toMatch(util.regEx.enum);
      expect(projImg.image).toBeDefined();
      expect(projImg.image.url).toMatch(util.regEx.image);
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

  // ██╗   ██╗██████╗ ██████╗  █████╗ ████████╗███████╗
  // ██║   ██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
  // ██║   ██║██████╔╝██║  ██║███████║   ██║   █████╗  
  // ██║   ██║██╔═══╝ ██║  ██║██╔══██║   ██║   ██╔══╝  
  // ╚██████╔╝██║     ██████╔╝██║  ██║   ██║   ███████╗
  //  ╚═════╝ ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                                    
  test('can update a project', async () => {
    const projectName = 'Gigantic Project';
    const projectDescription = 'This is a description of a project with all the fixin\'s, baby.';
    const projectPageRoute = 'projects/firsttestproject';
    const projectPageStyleShape = 'ROUND';

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
                id
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

    const response = await request(global.HOST, print(mutation));

    // Response and mutation
    expect(response).toBeDefined();
    expect(response.createProject).toBeDefined();
    expect(response.createProject.id).toBeDefined();

    const projectId = response.createProject.id;
    const projectPageStyleColorsOneId = response.createProject.page.style.colors[0].id;
    const projectPageStyleColorsTwoId = response.createProject.page.style.colors[1].id;
    const newProjectName = 'More Gigantic Project';
    const newProjectDescription = 'Oh, I forgot to mention this is a project about eating sourcreme.';
    const newProjectPageRoute = 'projects/sourcremery';
    const newProjectPageStyleShape = 'SQUARE';

    const updateMutation = gql`
      mutation {
        updateProject(
          id: "${projectId}"
          name: "${newProjectName}"
          description: "${newProjectDescription}"
          page: {
            update: {
              route: "${newProjectPageRoute}"
              style: {
                update: {
                  shape: ${newProjectPageStyleShape}
                  colors: {
                    update: [{
                      where: {
                        id: "${projectPageStyleColorsOneId}"
                      },
                      data: {
                        shade: DARK, type: PRIMARY, hex: "#E9B44C", rgb: "rgb(233, 180, 76)"
                      }
                    }, {
                      where: {
                        id: "${projectPageStyleColorsTwoId}"
                      },
                      data: {
                        shade: DARK, type: SECONDARY, hex: "#9B2915", rgb: "rgb(155, 41, 21)"
                      }
                    }]
                  }
                }
              }
            }
          }
          projectImages: {
            create: [
              {
                type: SECONDARY
                image: {
                  create: {
                    url: "http://images.fake/A_THIRD_IMAGE.jpg"
                    title: "Kanye running"
                    caption: "Ye evading swarm of bees"
                  }
                }
              }
              {
                type: LAZY
                image: {
                  create: {
                    url: "http://images.fake/A_FOURTH_IMAGE.jpg"
                    title: "Kanye fighting"
                    caption: "Ye retreating no more"
                  }
                }
              }
            ]
          }
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
        }
      }
    `;

    const updateResponse = await request(global.HOST, print(updateMutation));

    // Response and mutation
    expect(updateResponse).toBeDefined();
    expect(updateResponse.updateProject).toBeDefined();

    // ID, description and name
    expect(updateResponse.updateProject.id).toBeDefined();
    expect(updateResponse.updateProject.name).toEqual(newProjectName);
    expect(updateResponse.updateProject.description).toEqual(newProjectDescription);

    // Page
    expect(updateResponse.updateProject.page).toBeDefined();
    expect(updateResponse.updateProject.page.route).toEqual(newProjectPageRoute);
    expect(updateResponse.updateProject.page.style).toBeDefined();
    expect(updateResponse.updateProject.page.style.shape).toEqual(newProjectPageStyleShape);
    expect(updateResponse.updateProject.page.style.colors.length).toEqual(2);
    updateResponse.updateProject.page.style.colors.forEach((color) => {
      expect(color.shade).toBeDefined();
      expect(color.type).toBeDefined();
      expect(color.hex).toBeDefined();
      expect(color.hex).toMatch(util.regEx.hex);
      expect(color.rgb).toBeTruthy();
    });

    // Project Images
    expect(updateResponse.updateProject.projectImages.length).toEqual(4); // Added two more using 'create'
    updateResponse.updateProject.projectImages.forEach((projImg) => {
      expect(projImg.type).toMatch(util.regEx.enum);
      expect(projImg.image).toBeDefined();
      expect(projImg.image.url).toMatch(util.regEx.image);
      expect(projImg.image.title.length).toBeGreaterThan(0);
      expect(projImg.image.caption.length).toBeGreaterThan(0);
    });
  });

  // ██████╗ ███████╗██╗     ███████╗████████╗███████╗
  // ██╔══██╗██╔════╝██║     ██╔════╝╚══██╔══╝██╔════╝
  // ██║  ██║█████╗  ██║     █████╗     ██║   █████╗  
  // ██║  ██║██╔══╝  ██║     ██╔══╝     ██║   ██╔══╝  
  // ██████╔╝███████╗███████╗███████╗   ██║   ███████╗
  // ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝
                                                   
  test('can delete one project', async () => {
    const project = {
      name: shortid.generate(),
      description: shortid.generate()
    };

    const mutation = gql`
      mutation {
        createProject(
          name: "${project.name}"
          description: "${project.description}"
        ) {
          id
          name
          description
        }
      }
    `;

    const mutationResponse = await request(global.HOST, print(mutation));

    expect(mutationResponse).toBeTruthy();
    expect(mutationResponse.createProject.name).toEqual(project.name);
    expect(mutationResponse.createProject.description).toEqual(project.description);

    const projectId = mutationResponse.createProject.id;

    const deleteMutation = gql`
      mutation {
        deleteProject(
          id: "${projectId}"
        ) {
          id
          name
          description
        }
      }
    `;

    const queryResponse = await request(global.HOST, print(deleteMutation));

    expect(queryResponse).toBeTruthy();
    expect(queryResponse.deleteProject.name).toEqual(project.name);
    expect(queryResponse.deleteProject.description).toEqual(project.description);
  });
});

                                                     
describe('Projects Resolvers: Queries', () => {

  // ███████╗██╗███╗   ██╗██████╗      █████╗ ██╗     ██╗     
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔══██╗██║     ██║     
  // █████╗  ██║██╔██╗ ██║██║  ██║    ███████║██║     ██║     
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██╔══██║██║     ██║     
  // ██║     ██║██║ ╚████║██████╔╝    ██║  ██║███████╗███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝  ╚═╝╚══════╝╚══════╝
                                                              
  test('can query all projects', async () => {
    const mutations = [];
    const numMutations = 4;

    for (let i = 0; i < numMutations; i++) {
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

    await Promise.each(mutations, async (mutation) => {
      const mutationResponse = await request(global.HOST, print(mutation));
      expect(mutationResponse).toBeTruthy();
    });

    const query = gql`
      query findProjects {
        projects {
          id
          name
        }
      }
    `;

    const queryResponse = await request(global.HOST, print(query));
    expect(queryResponse).toBeTruthy();
    expect(queryResponse.projects.length).toBeGreaterThanOrEqual(numMutations);

  });

  // ███████╗██╗███╗   ██╗██████╗      ██████╗ ███╗   ██╗███████╗
  // ██╔════╝██║████╗  ██║██╔══██╗    ██╔═══██╗████╗  ██║██╔════╝
  // █████╗  ██║██╔██╗ ██║██║  ██║    ██║   ██║██╔██╗ ██║█████╗  
  // ██╔══╝  ██║██║╚██╗██║██║  ██║    ██║   ██║██║╚██╗██║██╔══╝  
  // ██║     ██║██║ ╚████║██████╔╝    ╚██████╔╝██║ ╚████║███████╗
  // ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                                                              
  test('can query one project', async () => {
    const project = {
      name: shortid.generate(),
      description: shortid.generate()
    };

    const mutation = gql`
      mutation {
        createProject(
          name: "${project.name}"
          description: "${project.description}"
        ) {
          id
          name
          description
        }
      }
    `;

    const mutationResponse = await request(global.HOST, print(mutation));

    expect(mutationResponse).toBeTruthy();
    expect(mutationResponse.createProject.name).toEqual(project.name);
    expect(mutationResponse.createProject.description).toEqual(project.description);

    const projectId = mutationResponse.createProject.id;

    const query = gql`
      query findOneProject {
        project(
          where: {
            id: "${projectId}"
          }
        ) {
          id
          name
          description
        }
      }
    `;

    const queryResponse = await request(global.HOST, print(query));

    expect(queryResponse).toBeTruthy();
    expect(queryResponse.project.name).toEqual(project.name);
    expect(queryResponse.project.description).toEqual(project.description);
  });
});