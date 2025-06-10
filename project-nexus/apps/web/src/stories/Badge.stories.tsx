import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Badge',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Badge',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium Badge',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Badge',
  size: 'large',
};

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'Badge',
  color: 'blue',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  label: 'Badge',
  backgroundColor: 'lightgray',
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  label: 'Badge',
  padding: 'lg',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  label: 'Badge',
  margin: 'lg',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  label: 'Badge',
  border: '2px solid #000',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  label: 'Badge',
  rounded: 'lg',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  label: 'Badge',
  shadow: 'md',
};

export const WithWidth = Template.bind({});
WithWidth.args = {
  label: 'Badge',
  width: '100px',
};

export const WithHeight = Template.bind({});
WithHeight.args = {
  label: 'Badge',
  height: '30px',
};

export const WithMinWidth = Template.bind({});
WithMinWidth.args = {
  label: 'Badge',
  minWidth: '50px',
};

export const WithMinHeight = Template.bind({});
WithMinHeight.args = {
  label: 'Badge',
  minHeight: '20px',
};

export const WithMaxWidth = Template.bind({});
WithMaxWidth.args = {
  label: 'Badge',
  maxWidth: '150px',
};

export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
  label: 'Badge',
  maxHeight: '40px',
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  label: 'This is a very long badge text that should overflow',
  overflow: 'auto',
  width: '100px',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  label: 'Badge',
  style: { borderRadius: '20px', backgroundColor: '#f0f8ff' },
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  label: 'Badge',
  className: 'custom-badge',
};

export const WithResponsive = Template.bind({});
WithResponsive.args = {
  label: 'Badge',
  responsive: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Badge',
  icon: '🏠',
};

export const WithIconPosition = Template.bind({});
WithIconPosition.args = {
  label: 'Badge',
  icon: '🏠',
  iconPosition: 'right',
};

export const WithIconColor = Template.bind({});
WithIconColor.args = {
  label: 'Badge',
  icon: '🏠',
  iconColor: 'red',
};

export const WithIconSize = Template.bind({});
WithIconSize.args = {
  label: 'Badge',
  icon: '🏠',
  iconSize: 'large',
};

export const WithIconStyle = Template.bind({});
WithIconStyle.args = {
  label: 'Badge',
  icon: '🏠',
  iconStyle: { marginRight: '5px' },
};

export const WithIconClassName = Template.bind({});
WithIconClassName.args = {
  label: 'Badge',
  icon: '🏠',
  iconClassName: 'badge-icon',
};