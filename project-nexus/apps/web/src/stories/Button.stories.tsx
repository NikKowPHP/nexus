import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success Button',
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning Button',
  variant: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  label: 'Info Button',
  variant: 'info',
};

export const Light = Template.bind({});
Light.args = {
  label: 'Light Button',
  variant: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Dark Button',
  variant: 'dark',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Button',
  variant: 'outline',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button with Icon',
  icon: '🔍',
};

export const WithSize = Template.bind({});
WithSize.args = {
  label: 'Large Button',
  size: 'large',
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  label: 'Full Width Button',
  fullWidth: true,
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  label: 'Clickable Button',
  onClick: () => alert('Button clicked'),
};