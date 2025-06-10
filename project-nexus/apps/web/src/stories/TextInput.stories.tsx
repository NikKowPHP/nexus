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

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  label: 'Disabled Input',
  disabled: true,
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
  label: 'Read Only Input',
  readOnly: true,
  value: 'Read only text',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Error Input',
  error: 'This is an error message',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Input with Helper Text',
  helperText: 'This is some helper text',
};

export const WithPassword = Template.bind({});
WithPassword.args = {
  label: 'Password Input',
  type: 'password',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Input with Icon',
  icon: '🔍',
};

export const WithSize = Template.bind({});
WithSize.args = {
  label: 'Large Input',
  size: 'large',
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  label: 'Full Width Input',
  fullWidth: true,
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  label: 'Rounded Input',
  rounded: 'full',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  label: 'Bordered Input',
  bordered: true,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  label: 'Input with Shadow',
  shadow: 'md',
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  label: 'Input with onChange',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => alert(`Value changed: ${e.target.value}`),
};

export const WithOnBlur = Template.bind({});
WithOnBlur.args = {
  label: 'Input with onBlur',
  onBlur: () => alert('Input blurred'),
};

export const WithOnFocus = Template.bind({});
WithOnFocus.args = {
  label: 'Input with onFocus',
  onFocus: () => alert('Input focused'),
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  label: 'Custom Styled Input',
  style: { borderColor: 'blue', color: 'blue' },
};