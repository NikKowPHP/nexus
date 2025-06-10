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

export const Small = Template.bind({});
Small.args = {
  value: 30,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  value: 70,
  size: 'large',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: 45,
  label: 'Uploading...',
};

export const Determinate = Template.bind({});
Determinate.args = {
  value: 60,
  determinate: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  value: 50,
  styles: {
    backgroundColor: '#e0e0e0',
    trackColor: '#b0b0b0',
    thumbColor: '#4caf50',
  },
};