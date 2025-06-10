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
  label: 'Default',
};

export const WithCount = Template.bind({});
WithCount.args = {
  label: 'Notifications',
  count: 5,
};

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'Important',
  color: 'red',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'New',
  icon: '🆕',
};