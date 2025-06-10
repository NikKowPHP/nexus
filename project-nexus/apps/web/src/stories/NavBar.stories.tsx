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

export const WithProfile = Template.bind({});
WithProfile.args = {
  title: 'NavBar with Profile',
  profile: { name: 'John Doe', avatar: 'https://example.com/avatar.jpg' },
  items: [
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  title: 'NavBar with Search',
  search: true,
  items: [
    { label: 'Search Results', onClick: () => alert('Search Results clicked') },
  ],
};

export const WithDarkMode = Template.bind({});
WithDarkMode.args = {
  title: 'NavBar with Dark Mode',
  darkMode: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Blog', onClick: () => alert('Blog clicked') },
  ],
};

export const WithFixed = Template.bind({});
WithFixed.args = {
  title: 'Fixed NavBar',
  fixed: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Portfolio', onClick: () => alert('Portfolio clicked') },
  ],
};

export const WithSticky = Template.bind({});
WithSticky.args = {
  title: 'Sticky NavBar',
  sticky: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Testimonials', onClick: () => alert('Testimonials clicked') },
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
  ],
};

export const WithMobileMenu = Template.bind({});
WithMobileMenu.args = {
  title: 'NavBar with Mobile Menu',
  mobileMenu: true,
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
  ],
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  title: 'Custom Styled NavBar',
  style: { backgroundColor: '#333', color: '#fff' },
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};

export const WithOnLogoClick = Template.bind({});
WithOnLogoClick.args = {
  title: 'NavBar with Logo Click',
  logo: 'https://example.com/logo.png',
  onLogoClick: () => alert('Logo clicked'),
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
  ],
};

export const WithOnProfileClick = Template.bind({});
WithOnProfileClick.args = {
  title: 'NavBar with Profile Click',
  profile: { name: 'Jane Doe', avatar: 'https://example.com/avatar.jpg' },
  onProfileClick: () => alert('Profile clicked'),
  items: [
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
  ],
};

export const WithOnSearchSubmit = Template.bind({});
WithOnSearchSubmit.args = {
  title: 'NavBar with Search Submit',
  search: true,
  onSearchSubmit: (query: string) => alert(`Search submitted: ${query}`),
  items: [
    { label: 'Search', onClick: () => alert('Search clicked') },
  ],
};

export const WithOnDarkModeToggle = Template.bind({});
WithOnDarkModeToggle.args = {
  title: 'NavBar with Dark Mode Toggle',
  darkMode: true,
  onDarkModeToggle: () => alert('Dark mode toggled'),
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
  ],
};

export const WithOnMobileMenuToggle = Template.bind({});
WithOnMobileMenuToggle.args = {
  title: 'NavBar with Mobile Menu Toggle',
  mobileMenu: true,
  onMobileMenuToggle: () => alert('Mobile menu toggled'),
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
  ],
};