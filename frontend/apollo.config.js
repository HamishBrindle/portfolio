module.exports = {
  client: {
    service: {
      name: 'hb-portfolio',
      url: 'http://localhost:4444/graphql',
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanZvc2p2cnAwMDBlMDc3MWtidDRjMnJtIiwiaWF0IjoxNTU4Mzc3NjY5fQ.rilE8R_g2hDaPMjUHSP3jbafUsZwsnkSD1MWkKb9hdk',
      },
      skipSSLValidation: true,
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
};
