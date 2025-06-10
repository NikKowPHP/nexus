import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: StoryFn = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'New',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'New',
  icon: '🔥',
};

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'New',
  color: 'red',
};