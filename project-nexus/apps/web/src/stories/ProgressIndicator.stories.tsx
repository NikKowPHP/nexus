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