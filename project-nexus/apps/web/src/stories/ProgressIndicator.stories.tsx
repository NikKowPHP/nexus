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
  label: 'Upload Progress',
};

export const WithSize = Template.bind({});
WithSize.args = {
  value: 30,
  size: 'large',
};

export const WithColor = Template.bind({});
WithColor.args = {
  value: 60,
  color: 'blue',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  value: 45,
  backgroundColor: 'lightgray',
};

export const WithStrokeWidth = Template.bind({});
WithStrokeWidth.args = {
  value: 80,
  strokeWidth: 5,
};

export const WithAnimation = Template.bind({});
WithAnimation.args = {
  value: 50,
  animated: true,
};

export const WithDeterminate = Template.bind({});
WithDeterminate.args = {
  value: 25,
  determinate: true,
};

export const WithIndeterminate = Template.bind({});
WithIndeterminate.args = {
  indeterminate: true,
};

export const WithText = Template.bind({});
WithText.args = {
  value: 50,
  showText: true,
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  value: 70,
  style: { marginTop: '20px' },
};

export const WithOnComplete = Template.bind({});
WithOnComplete.args = {
  value: 0,
  onComplete: () => alert('Progress completed!'),
};

export const WithStep = Template.bind({});
WithStep.args = {
  value: 3,
  max: 5,
  showText: true,
};