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

export const WithDot = Template.bind({});
WithDot.args = {
  label: 'New',
  dot: true,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  label: 'Custom',
  styles: {
    backgroundColor: '#4caf50',
    color: '#fff',
    borderRadius: '12px',
    padding: '4px 8px',
    fontSize: '12px',
  },
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  label: 'Clickable',
  onClick: () => alert('Badge clicked'),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Icon',
  icon: '🔔',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: 'Tooltip',
  tooltip: 'This is a tooltip',
};

export const WithStatus = Template.bind({});
WithStatus.args = {
  label: 'Active',
  status: 'success',
};

export const WithPosition = Template.bind({});
WithPosition.args = {
  label: 'Positioned',
  position: 'top-right',
};