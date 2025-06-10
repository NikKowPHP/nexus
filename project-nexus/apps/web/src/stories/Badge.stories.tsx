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

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'Primary Badge',
  color: 'blue',
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  label: 'Success Badge',
  backgroundColor: 'green',
  color: 'white',
};

export const WithPillShape = Template.bind({});
WithPillShape.args = {
  label: 'Pill Badge',
  pill: true,
};

export const WithOutline = Template.bind({});
WithOutline.args = {
  label: 'Outline Badge',
  outline: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Icon Badge',
  icon: '🔍',
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  label: 'Counter Badge',
  counter: 5,
};

export const WithDot = Template.bind({});
WithDot.args = {
  label: 'Dot Badge',
  dot: true,
};

export const WithSize = Template.bind({});
WithSize.args = {
  label: 'Large Badge',
  size: 'large',
};

export const WithPosition = Template.bind({});
WithPosition.args = {
  label: 'Positioned Badge',
  position: { top: -10, right: -10 },
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  label: 'Clickable Badge',
  onClick: () => alert('Badge clicked'),
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: 'Tooltip Badge',
  tooltip: 'This is a tooltip',
};