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
  label: 'Colored Badge',
  color: 'blue',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  label: 'Background Color Badge',
  backgroundColor: 'lightgray',
};

export const WithSize = Template.bind({});
WithSize.args = {
  label: 'Large Badge',
  size: 'large',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  label: 'Rounded Badge',
  rounded: 'full',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  label: 'Bordered Badge',
  border: '2px solid #000',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  label: 'Shadow Badge',
  shadow: 'md',
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

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  label: 'Styled Badge',
  style: { borderRadius: '50px' },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Icon Badge',
  icon: '🏠',
};

export const WithIconPosition = Template.bind({});
WithIconPosition.args = {
  label: 'Icon Position Badge',
  icon: '🏠',
  iconPosition: 'right',
};

export const WithIconColor = Template.bind({});
WithIconColor.args = {
  label: 'Icon Color Badge',
  icon: '🏠',
  iconColor: 'red',
};

export const WithIconSize = Template.bind({});
WithIconSize.args = {
  label: 'Icon Size Badge',
  icon: '🏠',
  iconSize: 'large',
};

export const WithIconStyle = Template.bind({});
WithIconStyle.args = {
  label: 'Icon Style Badge',
  icon: '🏠',
  iconStyle: { marginRight: '5px' },
};

export const WithIconClassName = Template.bind({});
WithIconClassName.args = {
  label: 'Icon ClassName Badge',
  icon: '🏠',
  iconClassName: 'custom-icon',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  label: 'Disabled Badge',
  disabled: true,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  label: 'Loading Badge',
  loading: true,
};

export const WithResponsive = Template.bind({});
WithResponsive.args = {
  label: 'Responsive Badge',
  responsive: true,
};