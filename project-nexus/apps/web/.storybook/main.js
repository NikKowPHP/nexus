// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Integrate Storybook
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END