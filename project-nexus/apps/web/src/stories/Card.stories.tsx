import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
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

// ... (rest of the story implementations from previous message)