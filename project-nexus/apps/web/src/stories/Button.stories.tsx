import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button with Icon',
  icon: '🔍',
};

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'Primary Button',
  color: 'blue',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  label: 'Success Button',
  backgroundColor: 'green',
};

export const WithTextColor = Template.bind({});
WithTextColor.args = {
  label: 'Warning Button',
  textColor: 'white',
  backgroundColor: 'orange',
};

export const WithSize = Template.bind({});
WithSize.args = {
  label: 'Large Button',
  size: 'large',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  label: 'Rounded Button',
  rounded: 'full',
};

export const WithOutline = Template.bind({});
WithOutline.args = {
  label: 'Outline Button',
  outline: true,
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  label: 'Loading Button',
  loading: true,
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  label: 'Clickable Button',
  onClick: () => alert('Button clicked'),
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: 'Tooltip Button',
  tooltip: 'This is a tooltip',
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  label: 'Full Width Button',
  fullWidth: true,
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  label: 'Custom Styled Button',
  style: { border: '2px solid #000', padding: '10px 20px' },
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: 'Left Icon Button',
  icon: '🔍',
  iconPosition: 'left',
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: 'Right Icon Button',
  icon: '🔍',
  iconPosition: 'right',
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  label: 'Badge Button',
  badge: '99+',
};

export const WithBadgeColor = Template.bind({});
WithBadgeColor.args = {
  label: 'Badge Color Button',
  badge: '3',
  badgeColor: 'red',
};