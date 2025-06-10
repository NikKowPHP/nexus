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

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: 75,
  label: 'Uploading...',
};

export const WithMax = Template.bind({});
WithMax.args = {
  value: 42,
  max: 100,
};

export const WithMin = Template.bind({});
WithMin.args = {
  value: 60,
  min: 30,
  max: 90,
};

export const WithStep = Template.bind({});
WithStep.args = {
  value: 20,
  step: 10,
  max: 100,
};

export const WithBuffer = Template.bind({});
WithBuffer.args = {
  value: 50,
  buffer: 75,
};

export const WithVariant = Template.bind({});
WithVariant.args = {
  value: 60,
  variant: 'success',
};

export const WithSize = Template.bind({});
WithSize.args = {
  value: 40,
  size: 'large',
};

export const WithStriped = Template.bind({});
WithStriped.args = {
  value: 30,
  striped: true,
};

export const WithAnimated = Template.bind({});
WithAnimated.args = {
  value: 45,
  animated: true,
};