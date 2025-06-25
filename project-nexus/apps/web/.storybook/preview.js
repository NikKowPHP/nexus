// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Storybook preview configuration
import '../src/app/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END