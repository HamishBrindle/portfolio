module.exports = {
  presets: [
    '@vue/app',
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
