import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressIndicator from '../components/ProgressIndicator';

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
} as Meta;

const Template: StoryFn = (args) => <ProgressIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
};

export const WithMinMax = Template.bind({});
WithMinMax.args = {
  value: 50,
  min: 0,
  max: 100,
};

export const WithStep = Template.bind({});
WithStep.args = {
  value: 50,
  step: 10,
};

export const WithBuffer = Template.bind({});
WithBuffer.args = {
  value: 50,
  buffer: 75,
};

export const WithColor = Template.bind({});
WithColor.args = {
  value: 50,
  color: 'blue',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  value: 50,
  backgroundColor: 'lightgray',
};

export const WithSize = Template.bind({});
WithSize.args = {
  value: 50,
  size: 'large',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  value: 50,
  rounded: 'full',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  value: 50,
  border: '2px solid #000',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  value: 50,
  shadow: 'md',
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  value: 50,
  onChange: (value: number) => alert(`Value changed: ${value}`),
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  value: 50,
  onClick: () => alert('ProgressIndicator clicked'),
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  value: 50,
  tooltip: 'Progress: 50%',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  value: 50,
  style: { borderRadius: '50px' },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: 50,
  label: 'Progress:',
};

export const WithLabelPosition = Template.bind({});
WithLabelPosition.args = {
  value: 50,
  label: 'Progress:',
  labelPosition: 'top',
};

export const WithLabelColor = Template.bind({});
WithLabelColor.args = {
  value: 50,
  label: 'Progress:',
  labelColor: 'blue',
};

export const WithLabelSize = Template.bind({});
WithLabelSize.args = {
  value: 50,
  label: 'Progress:',
  labelSize: 'large',
};

export const WithLabelStyle = Template.bind({});
WithLabelStyle.args = {
  value: 50,
  label: 'Progress:',
  labelStyle: { fontWeight: 'bold' },
};

export const WithLabelClassName = Template.bind({});
WithLabelClassName.args = {
  value: 50,
  label: 'Progress:',
  labelClassName: 'custom-label',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  value: 50,
  disabled: true,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  value: 50,
  loading: true,
};

export const WithIndeterminate = Template.bind({});
WithIndeterminate.args = {
  value: 50,
  indeterminate: true,
};

export const WithStriped = Template.bind({});
WithStriped.args = {
  value: 50,
  striped: true,
};

export const WithAnimated = Template.bind({});
WithAnimated.args = {
  value: 50,
  animated: true,
};

export const WithResponsive = Template.bind({});
WithResponsive.args = {
  value: 50,
  responsive: true,
};