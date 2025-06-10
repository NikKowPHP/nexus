import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NavBar from '../components/NavBar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const Responsive = Template.bind({});
Responsive.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Products', href: '/products' },
    { label: 'Support', href: '/support' },
  ],
  responsive: true,
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  items: [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      dropdownItems: [
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Development', href: '/services/development' },
        { label: 'Design', href: '/services/design' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ],
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  logo: 'https://example.com/logo.png',
};

export const WithBrand = Template.bind({});
WithBrand.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  brand: 'My Brand',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  backgroundColor: 'lightgray',
};

export const WithColor = Template.bind({});
WithColor.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  color: 'blue',
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  padding: 'lg',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  margin: 'lg',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  border: '2px solid #000',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  rounded: 'lg',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  shadow: 'md',
};

export const WithWidth = Template.bind({});
WithWidth.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  width: '100%',
};

export const WithHeight = Template.bind({});
WithHeight.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  height: '60px',
};

export const WithMinWidth = Template.bind({});
WithMinWidth.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  minWidth: '300px',
};

export const WithMinHeight = Template.bind({});
WithMinHeight.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  minHeight: '50px',
};

export const WithMaxWidth = Template.bind({});
WithMaxWidth.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  maxWidth: '1200px',
};

export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  maxHeight: '80px',
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Support', href: '/support' },
  ],
  overflow: 'auto',
  width: '300px',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  style: { borderRadius: '20px', backgroundColor: '#f0f8ff' },
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  className: 'custom-navbar',
};


export const WithIcon = Template.bind({});
WithIcon.args = {
  items: [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'About', href: '/about', icon: '📄' },
    { label: 'Contact', href: '/contact', icon: '📞' },
  ],
};

export const WithActiveItem = Template.bind({});
WithActiveItem.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  activeItem: '/about',
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  onClick: (item: { label: string }) => alert(`Navigating to ${item.label}`),
};