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
  value: 'Pre-filled text',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Input with Icon',
  placeholder: 'Search...',
  icon: '🔍',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Input with Error',
  placeholder: 'Enter text here',
  error: 'This field is required',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Input with Helper Text',
  placeholder: 'Enter your email',
  helperText: 'We will never share your email.',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password Input',
  type: 'password',
  placeholder: 'Enter your password',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'This input is disabled',
  disabled: true,
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  label: 'Input with onChange',
  placeholder: 'Type something',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => alert(`Value changed: ${e.target.value}`),
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: 'Input with Max Length',
  placeholder: 'Enter text (max 10 chars)',
  maxLength: 10,
};