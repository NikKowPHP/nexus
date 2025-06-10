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

export const Determinate = Template.bind({});
Determinate.args = {
  value: 30,
  determinate: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const WithSize = Template.bind({});
WithSize.args = {
  value: 60,
  size: 60,
};