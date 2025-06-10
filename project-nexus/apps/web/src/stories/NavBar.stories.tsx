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

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  items: [
    { label: 'Home', path: '/' },
    {
      label: 'Services',
      path: '/services',
      dropdownItems: [
        { label: 'Web Design', path: '/services/web-design' },
        { label: 'SEO', path: '/services/seo' },
        { label: 'Marketing', path: '/services/marketing' },
      ],
    },
    { label: 'Contact', path: '/contact' },
  ],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  items: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  styles: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
  },
};

export const WithAuth = Template.bind({});
WithAuth.args = {
  items: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
  ],
  auth: {
    isAuthenticated: true,
    user: { name: 'John Doe' },
  },
};