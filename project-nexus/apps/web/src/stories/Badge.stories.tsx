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
  label: 'Default Badge',
};

export const WithCount = Template.bind({});
WithCount.args = {
  label: 'Notifications',
  count: 5,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'New Messages',
  icon: '💬',
};

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'Important',
  color: 'red',
};

export const WithDot = Template.bind({});
WithDot.args = {
  label: 'Online',
  dot: true,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  label: 'Custom Badge',
  styles: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '15px',
  },
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  label: 'Clickable Badge',
  onClick: () => alert('Badge clicked'),
};