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
  title: 'My App',
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  title: 'My App',
  logo: 'https://example.com/logo.png',
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
  ],
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  title: 'My App',
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    {
      label: 'Services',
      dropdownItems: [
        { label: 'Consulting', onClick: () => alert('Consulting clicked') },
        { label: 'Development', onClick: () => alert('Development clicked') },
      ],
    },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  title: 'My App',
  search: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
  ],
};

export const WithUserMenu = Template.bind({});
WithUserMenu.args = {
  title: 'My App',
  userMenu: {
    name: 'John Doe',
    avatar: 'https://example.com/avatar.png',
    menuItems: [
      { label: 'Profile', onClick: () => alert('Profile clicked') },
      { label: 'Settings', onClick: () => alert('Settings clicked') },
      { label: 'Logout', onClick: () => alert('Logout clicked') },
    ],
  },
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
  ],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  title: 'My App',
  styles: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
  },
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
  ],
};

export const WithMobileMenu = Template.bind({});
WithMobileMenu.args = {
  title: 'My App',
  mobile: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const WithOnSearch = Template.bind({});
WithOnSearch.args = {
  title: 'My App',
  search: true,
  onSearch: (query: string) => alert(`Searching for: ${query}`),
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
  ],
};

export const WithActiveItem = Template.bind({});
WithActiveItem.args = {
  title: 'My App',
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', active: true, onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};