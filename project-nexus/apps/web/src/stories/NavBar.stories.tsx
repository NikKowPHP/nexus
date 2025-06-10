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
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
  ],
  search: true,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  title: 'My App',
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
  ],
  styles: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
  },
};

export const Responsive = Template.bind({});
Responsive.args = {
  title: 'My App',
  items: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
  responsive: true,
};