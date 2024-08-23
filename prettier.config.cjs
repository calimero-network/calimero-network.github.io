module.exports = {
  semi: true,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',

  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        printWidth: 80,
        proseWrap: 'always',
      },
    },
  ],
};