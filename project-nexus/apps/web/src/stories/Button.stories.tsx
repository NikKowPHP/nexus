import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  label: 'Disabled Button',
  disabled: true,
};