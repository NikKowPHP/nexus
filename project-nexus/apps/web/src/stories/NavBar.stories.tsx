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
  title: 'Default NavBar',
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  title: 'NavBar with Logo',
  logo: 'https://example.com/logo.png',
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Services', onClick: () => alert('Services clicked') },
  ],
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  title: 'NavBar with Dropdown',
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    {
      label: 'Services',
      dropdownItems: [
        { label: 'Web Design', onClick: () => alert('Web Design clicked') },
        { label: 'SEO', onClick: () => alert('SEO clicked') },
      ],
    },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  title: 'NavBar with Search',
  showSearch: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Blog', onClick: () => alert('Blog clicked') },
  ],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  title: 'Styled NavBar',
  styles: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
  },
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Portfolio', onClick: () => alert('Portfolio clicked') },
  ],
};

export const Responsive = Template.bind({});
Responsive.args = {
  title: 'Responsive NavBar',
  responsive: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Services', onClick: () => alert('Services clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const WithUserMenu = Template.bind({});
WithUserMenu.args = {
  title: 'NavBar with User Menu',
  user: { name: 'John Doe', avatar: 'https://example.com/avatar.jpg' },
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
  ],
};

export const WithOnSearch = Template.bind({});
WithOnSearch.args = {
  title: 'NavBar with onSearch',
  showSearch: true,
  onSearch: (query: string) => alert(`Searching for: ${query}`),
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Products', onClick: () => alert('Products clicked') },
  ],
};