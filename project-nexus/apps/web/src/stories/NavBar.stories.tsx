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
  items: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  items: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  logo: 'https://example.com/logo.png',
};

export const WithUserMenu = Template.bind({});
WithUserMenu.args = {
  items: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  userMenu: {
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
  },
};