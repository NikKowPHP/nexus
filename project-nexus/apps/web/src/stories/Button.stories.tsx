import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable button component with various styling options.

### Usage
\`\`\`jsx
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
\`\`\`

### Props
- \`variant\`: 'primary' | 'secondary' | 'outline' - Visual style of the button
- \`disabled\`: boolean - Whether the button is disabled
- \`label\`: string - Text displayed on the button (alternative to children)
- \`onClick\`: () => void - Click handler function
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interactions',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Button',
  variant: 'outline',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: 'Button with Children',
};