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
  title: 'Card Title',
  content: 'This is a card content.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  content: 'This card has an image.',
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