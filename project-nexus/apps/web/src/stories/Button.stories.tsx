import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

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

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button with Icon',
  icon: '🔍',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  label: 'Styled Button',
  styles: {
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '24px',
    padding: '8px 16px',
  },
};