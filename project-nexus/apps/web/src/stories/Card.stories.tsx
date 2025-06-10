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

// ... (rest of the story implementations from previous message)