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

export const WithMin = Template.bind({});
WithMin.args = {
  value: 25,
  min: 10,
};

export const WithMax = Template.bind({});
WithMax.args = {
  value: 75,
  max: 100,
};

export const WithStep = Template.bind({});
WithStep.args = {
  value: 50,
  step: 10,
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  value: 50,
  backgroundColor: 'lightgray',
};

export const WithColor = Template.bind({});
WithColor.args = {
  value: 50,
  color: 'blue',
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  value: 50,
  padding: 'lg',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  value: 50,
  margin: 'lg',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  value: 50,
  border: '2px solid #000',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  value: 50,
  rounded: 'lg',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  value: 50,
  shadow: 'md',
};

export const WithWidth = Template.bind({});
WithWidth.args = {
  value: 50,
  width: '100%',
};

export const WithHeight = Template.bind({});
WithHeight.args = {
  value: 50,
  height: '20px',
};

export const WithMinWidth = Template.bind({});
WithMinWidth.args = {
  value: 50,
  minWidth: '100px',
};

export const WithMinHeight = Template.bind({});
WithMinHeight.args = {
  value: 50,
  minHeight: '10px',
};

export const WithMaxWidth = Template.bind({});
WithMaxWidth.args = {
  value: 50,
  maxWidth: '300px',
};

export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
  value: 50,
  maxHeight: '30px',
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  value: 50,
  overflow: 'auto',
  width: '300px',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  value: 50,
  style: { borderRadius: '20px', backgroundColor: '#f0f8ff' },
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  value: 50,
  className: 'custom-progress',
};

export const WithResponsive = Template.bind({});
WithResponsive.args = {
  value: 50,
  responsive: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: 50,
  label: 'Progress',
};

export const WithLabelPosition = Template.bind({});
WithLabelPosition.args = {
  value: 50,
  label: 'Progress',
  labelPosition: 'top',
};

export const WithLabelColor = Template.bind({});
WithLabelColor.args = {
  value: 50,
  label: 'Progress',
  labelColor: 'red',
};

export const WithLabelSize = Template.bind({});
WithLabelSize.args = {
  value: 50,
  label: 'Progress',
  labelSize: 'large',
};

export const WithLabelStyle = Template.bind({});
WithLabelStyle.args = {
  value: 50,
  label: 'Progress',
  labelStyle: { marginTop: '10px' },
};

export const WithLabelClassName = Template.bind({});
WithLabelClassName.args = {
  value: 50,
  label: 'Progress',
  labelClassName: 'progress-label',
};