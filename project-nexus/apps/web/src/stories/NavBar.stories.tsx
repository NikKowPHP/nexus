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
  logo: 'https://example.com/logo.png',
  items: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  items: [
    { label: 'Home', path: '/' },
    {
      label: 'Services',
      dropdownItems: [
        { label: 'Service 1', path: '/services/1' },
        { label: 'Service 2', path: '/services/2' },
        { label: 'Service 3', path: '/services/3' },
      ],
    },
    { label: 'Contact', path: '/contact' },
  ],
};

export const WithUserMenu = Template.bind({});
WithUserMenu.args = {
  user: { name: 'John Doe', avatar: 'https://example.com/avatar.jpg' },
  items: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
};