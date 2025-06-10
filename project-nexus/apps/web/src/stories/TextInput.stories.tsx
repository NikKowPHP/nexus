import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextInput from '../components/TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  placeholder: 'Enter text',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Input with Error',
  placeholder: 'Enter text',
  error: 'This field is required',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'Enter text',
  disabled: true,
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password Input',
  placeholder: 'Enter password',
  type: 'password',
};