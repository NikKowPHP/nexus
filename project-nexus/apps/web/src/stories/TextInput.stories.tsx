import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextInput from '../components/TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

const Template: StoryFn = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  placeholder: 'Enter text here',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Input with Value',
  placeholder: 'Enter text here',
  value: 'Pre-filled text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'This input is disabled',
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Input with Error',
  placeholder: 'Enter text here',
  error: 'This is an error message',
};