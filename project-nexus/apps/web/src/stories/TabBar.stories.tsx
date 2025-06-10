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
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  tabs: [
    { label: 'Home', icon: '🏠', onClick: () => alert('Home clicked') },
    { label: 'Search', icon: '🔍', onClick: () => alert('Search clicked') },
    { label: 'Notifications', icon: '🔔', onClick: () => alert('Notifications clicked') },
  ],
};

export const WithBadges = Template.bind({});
WithBadges.args = {
  tabs: [
    { label: 'Messages', badge: '5', onClick: () => alert('Messages clicked') },
    { label: 'Notifications', badge: '3', onClick: () => alert('Notifications clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  tabs: [
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
    { label: 'Analytics', onClick: () => alert('Analytics clicked') },
    { label: 'Support', onClick: () => alert('Support clicked') },
  ],
  styles: {
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #ddd',
    padding: '10px 0',
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
  tabs: [
    { label: 'Home', icon: '🏠', onClick: () => alert('Home clicked') },
    { label: 'Profile', icon: '👤', onClick: () => alert('Profile clicked') },
    { label: 'Settings', icon: '⚙️', onClick: () => alert('Settings clicked') },
  ],
};

export const WithActiveTab = Template.bind({});
WithActiveTab.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
    { label: 'Reports', onClick: () => alert('Reports clicked') },
  ],
  activeTab: 1,
};

export const WithOnTabChange = Template.bind({});
WithOnTabChange.args = {
  tabs: [
    { label: 'Overview', onClick: () => alert('Overview clicked') },
    { label: 'Details', onClick: () => alert('Details clicked') },
    { label: 'History', onClick: () => alert('History clicked') },
  ],
  onTabChange: (index: number) => alert(`Tab changed to: ${index}`),
};

export const Responsive = Template.bind({});
Responsive.args = {
  responsive: true,
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'About', onClick: () => alert('About clicked') },
    { label: 'Contact', onClick: () => alert('Contact clicked') },
  ],
};