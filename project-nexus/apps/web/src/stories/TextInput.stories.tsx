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

export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: 'Enter text',
  value: 'Initial value',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  placeholder: 'Enter text',
  label: 'Label Text',
};