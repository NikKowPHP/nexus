import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TabBar from '../components/TabBar';

export default {
  title: 'Components/TabBar',
  component: TabBar,
} as Meta;

const Template: StoryFn = (args) => <TabBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Home', path: '/' },
    { label: 'Profile', path: '/profile' },
    { label: 'Settings', path: '/settings' },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  tabs: [
    { label: 'Home', path: '/', icon: '🏠' },
    { label: 'Profile', path: '/profile', icon: '👤' },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
  ],
};

export const WithActiveTab = Template.bind({});
WithActiveTab.args = {
  tabs: [
    { label: 'Home', path: '/' },
    { label: 'Profile', path: '/profile' },
    { label: 'Settings', path: '/settings' },
  ],
  activeTab: '/profile',
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  tabs: [
    { label: 'Home', path: '/' },
    { label: 'Notifications', path: '/notifications', badge: 5 },
    { label: 'Settings', path: '/settings' },
  ],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  tabs: [
    { label: 'Home', path: '/' },
    { label: 'Profile', path: '/profile' },
    { label: 'Settings', path: '/settings' },
  ],
  styles: {
    backgroundColor: '#f8f9fa',
    activeColor: '#007bff',
    inactiveColor: '#6c757d',
  },
};