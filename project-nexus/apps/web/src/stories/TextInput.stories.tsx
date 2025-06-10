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
  placeholder: 'Enter text',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Input with Value',
  placeholder: 'Enter text',
  value: 'Pre-filled text',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Input with Error',
  placeholder: 'Enter text',
  error: 'This field is required',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password Input',
  placeholder: 'Enter password',
  type: 'password',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'Enter text',
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Input with Icon',
  placeholder: 'Enter text',
  icon: '🔍',
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  label: 'Input with onChange',
  placeholder: 'Enter text',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
};