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

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  label: 'Custom Badge',
  styles: {
    backgroundColor: '#4caf50',
    color: '#fff',
    borderRadius: '12px',
    padding: '4px 8px',
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'New',
  icon: '🆕',
};

export const WithDot = Template.bind({});
WithDot.args = {
  label: 'Online',
  dot: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: 'Info',
  tooltip: 'This is an informational badge',
};