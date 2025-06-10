import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: StoryFn = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  content: 'This is a default card with basic content.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  content: 'This card includes an image.',
  image: 'https://example.com/image.jpg',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Card with Actions',
  content: 'This card has action buttons.',
  actions: [
    { label: 'Action 1', onClick: () => alert('Action 1 clicked') },
    { label: 'Action 2', onClick: () => alert('Action 2 clicked') },
  ],
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Card with Footer',
  content: 'This card has a footer section.',
  footer: 'Footer content goes here',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  title: 'Styled Card',
  content: 'This card has custom styles.',
  styles: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
  },
};

export const Interactive = Template.bind({});
Interactive.args = {
  title: 'Interactive Card',
  content: 'Click the card to trigger an action.',
  onClick: () => alert('Card clicked'),
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  title: 'Card with Badge',
  content: 'This card has a badge.',
  badge: { label: 'New', color: 'red' },
};