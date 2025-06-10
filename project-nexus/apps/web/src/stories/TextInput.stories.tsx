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

export const WithType = Template.bind({});
WithType.args = {
  label: 'Input with Type',
  placeholder: 'Enter text',
  type: 'password',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  label: 'Disabled Input',
  placeholder: 'Enter text',
  disabled: true,
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
  label: 'ReadOnly Input',
  placeholder: 'Enter text',
  readOnly: true,
};

export const WithRequired = Template.bind({});
WithRequired.args = {
  label: 'Required Input',
  placeholder: 'Enter text',
  required: true,
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: 'Input with MaxLength',
  placeholder: 'Enter text',
  maxLength: 10,
};

export const WithMinLength = Template.bind({});
WithMinLength.args = {
  label: 'Input with MinLength',
  placeholder: 'Enter text',
  minLength: 5,
};

export const WithSize = Template.bind({});
WithSize.args = {
  label: 'Input with Size',
  placeholder: 'Enter text',
  size: 'large',
};

export const WithWidth = Template.bind({});
WithWidth.args = {
  label: 'Input with Width',
  placeholder: 'Enter text',
  width: '300px',
};

export const WithHeight = Template.bind({});
WithHeight.args = {
  label: 'Input with Height',
  placeholder: 'Enter text',
  height: '50px',
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  label: 'Input with Padding',
  placeholder: 'Enter text',
  padding: 'lg',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  label: 'Input with Margin',
  placeholder: 'Enter text',
  margin: 'lg',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  label: 'Input with Border',
  placeholder: 'Enter text',
  border: '2px solid #000',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  label: 'Input with Rounded',
  placeholder: 'Enter text',
  rounded: 'lg',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  label: 'Input with Shadow',
  placeholder: 'Enter text',
  shadow: 'md',
};

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'Input with Color',
  placeholder: 'Enter text',
  color: 'blue',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  label: 'Input with Background Color',
  placeholder: 'Enter text',
  backgroundColor: 'lightgray',
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  label: 'Input with OnChange',
  placeholder: 'Enter text',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => alert(`Value changed: ${e.target.value}`),
};

export const WithOnFocus = Template.bind({});
WithOnFocus.args = {
  label: 'Input with OnFocus',
  placeholder: 'Enter text',
  onFocus: () => alert('Input focused'),
};

export const WithOnBlur = Template.bind({});
WithOnBlur.args = {
  label: 'Input with OnBlur',
  placeholder: 'Enter text',
  onBlur: () => alert('Input blurred'),
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: 'Input with Tooltip',
  placeholder: 'Enter text',
  tooltip: 'This is a tooltip',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Input with Icon',
  placeholder: 'Enter text',
  icon: '🏠',
};

export const WithIconPosition = Template.bind({});
WithIconPosition.args = {
  label: 'Input with Icon Position',
  placeholder: 'Enter text',
  icon: '🏠',
  iconPosition: 'right',
};

export const WithIconColor = Template.bind({});
WithIconColor.args = {
  label: 'Input with Icon Color',
  placeholder: 'Enter text',
  icon: '🏠',
  iconColor: 'red',
};

export const WithIconSize = Template.bind({});
WithIconSize.args = {
  label: 'Input with Icon Size',
  placeholder: 'Enter text',
  icon: '🏠',
  iconSize: 'large',
};

export const WithIconStyle = Template.bind({});
WithIconStyle.args = {
  label: 'Input with Icon Style',
  placeholder: 'Enter text',
  icon: '🏠',
  iconStyle: { marginRight: '5px' },
};

export const WithIconClassName = Template.bind({});
WithIconClassName.args = {
  label: 'Input with Icon ClassName',
  placeholder: 'Enter text',
  icon: '🏠',
  iconClassName: 'custom-icon',
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  label: 'Input with Loading',
  placeholder: 'Enter text',
  loading: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Input with Error',
  placeholder: 'Enter text',
  error: 'This is an error message',
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  label: 'Input with Success',
  placeholder: 'Enter text',
  success: 'This is a success message',
};

export const WithWarning = Template.bind({});
WithWarning.args = {
  label: 'Input with Warning',
  placeholder: 'Enter text',
  warning: 'This is a warning message',
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  label: 'Input with Info',
  placeholder: 'Enter text',
  info: 'This is an info message',
};

export const WithResponsive = Template.bind({});
WithResponsive.args = {
  label: 'Input with Responsive',
  placeholder: 'Enter text',
  responsive: true,
};