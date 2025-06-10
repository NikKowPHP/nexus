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
  placeholder: 'Enter text',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Username',
  placeholder: 'Enter your username',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  value: 'user@example.com',
};

export const WithType = Template.bind({});
WithType.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  type: 'password',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  label: 'Disabled Input',
  placeholder: 'This input is disabled',
  disabled: true,
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
  label: 'Read Only',
  placeholder: 'This input is read-only',
  readOnly: true,
};

export const WithRequired = Template.bind({});
WithRequired.args = {
  label: 'Required Field',
  placeholder: 'This field is required',
  required: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Input with Helper Text',
  placeholder: 'Enter text',
  helperText: 'This is some helper text',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Input with Error',
  placeholder: 'Enter text',
  error: true,
  helperText: 'This field has an error',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Input with Icon',
  placeholder: 'Enter text',
  icon: '🔍',
};

export const WithSize = Template.bind({});
WithSize.args = {
  label: 'Large Input',
  placeholder: 'Enter text',
  size: 'large',
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  label: 'Full Width Input',
  placeholder: 'Enter text',
  fullWidth: true,
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  label: 'Input with onChange',
  placeholder: 'Enter text',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => alert(`Value changed: ${e.target.value}`),
};