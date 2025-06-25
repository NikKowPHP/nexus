// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Integrate Storybook
import { ThemeProvider } from '../src/providers/ThemeProvider';
import { defaultTheme } from '../src/lib/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: defaultTheme.colors.background },
      { name: 'dark', value: '#1a1a1a' },
    ],
  },
}
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END