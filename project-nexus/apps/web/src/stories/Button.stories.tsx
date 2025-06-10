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

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  label: 'Clickable Button',
  onClick: () => alert('Button clicked'),
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

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'Colored Button',
  color: 'blue',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  label: 'Background Color Button',
  backgroundColor: 'lightgray',
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

export const WithBorder = Template.bind({});
WithBorder.args = {
  label: 'Bordered Button',
  border: '2px solid #000',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  label: 'Shadow Button',
  shadow: 'md',
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  label: 'Padding Button',
  padding: 'lg',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  label: 'Margin Button',
  margin: 'lg',
};

export const WithWidth = Template.bind({});
WithWidth.args = {
  label: 'Width Button',
  width: '200px',
};

export const WithHeight = Template.bind({});
WithHeight.args = {
  label: 'Height Button',
  height: '50px',
};

export const WithMinWidth = Template.bind({});
WithMinWidth.args = {
  label: 'Min Width Button',
  minWidth: '150px',
};

export const WithMinHeight = Template.bind({});
WithMinHeight.args = {
  label: 'Min Height Button',
  minHeight: '40px',
};

export const WithMaxWidth = Template.bind({});
WithMaxWidth.args = {
  label: 'Max Width Button',
  maxWidth: '250px',
};

export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
  label: 'Max Height Button',
  maxHeight: '60px',
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  label: 'Overflow Button',
  overflow: 'hidden',
  width: '100px',
  height: '30px',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  label: 'Custom Style Button',
  style: { borderRadius: '50px', backgroundColor: '#f0f8ff' },
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  label: 'Class Name Button',
  className: 'custom-button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Icon Button',
  icon: '🏠',
};

export const WithIconPosition = Template.bind({});
WithIconPosition.args = {
  label: 'Icon Position Button',
  icon: '🏠',
  iconPosition: 'right',
};

export const WithIconColor = Template.bind({});
WithIconColor.args = {
  label: 'Icon Color Button',
  icon: '🏠',
  iconColor: 'red',
};

export const WithIconSize = Template.bind({});
WithIconSize.args = {
  label: 'Icon Size Button',
  icon: '🏠',
  iconSize: 'large',
};

export const WithIconStyle = Template.bind({});
WithIconStyle.args = {
  label: 'Icon Style Button',
  icon: '🏠',
  iconStyle: { marginRight: '5px' },
};

export const WithIconClassName = Template.bind({});
WithIconClassName.args = {
  label: 'Icon ClassName Button',
  icon: '🏠',
  iconClassName: 'custom-icon',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: 'Tooltip Button',
  tooltip: 'This is a tooltip',
};

export const WithResponsive = Template.bind({});
WithResponsive.args = {
  label: 'Responsive Button',
  responsive: true,
};