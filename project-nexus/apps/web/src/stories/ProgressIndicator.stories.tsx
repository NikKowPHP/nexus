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
  value: 25,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  value: 75,
  size: 'large',
};