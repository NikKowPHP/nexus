import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NavBar from '../components/NavBar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as Meta;

const Template: StoryFn = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Home', 'About', 'Contact'],
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  items: ['Home', 'About', 'Contact'],
  logo: 'https://example.com/logo.png',
};