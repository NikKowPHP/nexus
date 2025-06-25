// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Card component stories
import React from 'react';
import { Meta, StoryFn } from '@storybook/nextjs';
import Card from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible card component with header, content, and footer sections.

### Usage
\`\`\`jsx
<Card
  title="Card Title"
  content="Main content"
  footer="Footer content"
  elevation={true}
/>
\`\`\`

### Props
- \`title\`: string - Card header title
- \`content\`: string | ReactNode - Main content area
- \`footer\`: string | ReactNode - Footer content (optional)
- \`elevation\`: boolean - Adds box shadow when true
- \`disabled\`: boolean - Disables interaction and reduces opacity
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card header title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    content: {
      control: 'text',
      description: 'Main content area',
      table: {
        type: { summary: 'string | ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    footer: {
      control: 'text',
      description: 'Footer content',
      table: {
        type: { summary: 'string | ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    elevation: {
      control: 'boolean',
      description: 'Adds box shadow effect',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  content: 'This is the default card content.',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Card with Footer',
  content: 'Main content area',
  footer: 'Footer content',
};

export const Elevated = Template.bind({});
Elevated.args = {
  title: 'Elevated Card',
  content: 'This card has elevation',
  elevation: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled',
  disabled: true,
};
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END

// ... (rest of the story implementations from previous message)