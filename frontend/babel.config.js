module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    ['wildcard', {
      noModifyCase: true, // For importing all files in a directory
    }],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
      plugins: [
        'require-context-hook',
        'dynamic-import-node',
      ],
    },
  },
};
