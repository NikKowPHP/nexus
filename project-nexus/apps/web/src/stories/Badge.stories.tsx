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

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  label: 'Success Badge',
  backgroundColor: 'green',
};

export const WithTextColor = Template.bind({});
WithTextColor.args = {
  label: 'Warning Badge',
  textColor: 'white',
  backgroundColor: 'orange',
};

export const WithSize = Template.bind({});
WithSize.args = {
  label: 'Large Badge',
  size: 'large',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  label: 'Rounded Badge',
  rounded: true,
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

export const WithDot = Template.bind({});
WithDot.args = {
  label: 'Dot Badge',
  dot: true,
};

export const WithDotColor = Template.bind({});
WithDotColor.args = {
  label: 'Dot Color Badge',
  dot: true,
  dotColor: 'red',
};

export const WithPosition = Template.bind({});
WithPosition.args = {
  label: 'Positioned Badge',
  position: 'top-right',
};

export const WithOffset = Template.bind({});
WithOffset.args = {
  label: 'Offset Badge',
  offsetX: 10,
  offsetY: 5,
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  label: 'Styled Badge',
  style: { marginTop: '10px', fontWeight: 'bold' },
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