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

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Input with Icon',
  placeholder: 'Enter text here',
  icon: '🔍',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'Enter text here',
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Input with Error',
  placeholder: 'Enter text here',
  error: 'This field is required',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password Input',
  placeholder: 'Enter password',
  type: 'password',
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  label: 'Input with onChange',
  placeholder: 'Enter text here',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => alert(`Value changed: ${e.target.value}`),
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  label: 'Styled Input',
  placeholder: 'Enter text here',
  styles: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
  },
};