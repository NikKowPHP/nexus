import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressIndicator from '../components/ProgressIndicator';

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
} as Meta;

const Template: StoryFn = (args) => <ProgressIndicator {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  value: 50,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  value: 75,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  value: 25,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  size: 'medium',
  value: 60,
  label: 'Loading...',
};

export const Determinate = Template.bind({});
Determinate.args = {
  size: 'large',
  value: 80,
  determinate: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  size: 'medium',
  indeterminate: true,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  size: 'large',
  value: 40,
  styles: {
    backgroundColor: '#e0e0e0',
    trackColor: '#b0b0b0',
    indicatorColor: '#007bff',
  },
};