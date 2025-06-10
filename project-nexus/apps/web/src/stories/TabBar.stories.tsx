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
    { label: 'Profile', icon: '👤', onClick: () => alert('Profile clicked') },
    { label: 'Settings', icon: '⚙️', onClick: () => alert('Settings clicked') },
  ],
};

export const WithBadges = Template.bind({});
WithBadges.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Messages', badge: 5, onClick: () => alert('Messages clicked') },
    { label: 'Notifications', badge: 10, onClick: () => alert('Notifications clicked') },
  ],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
  ],
  styles: {
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #ddd',
    padding: '10px 0',
  },
};

export const Centered = Template.bind({});
Centered.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  centered: true,
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
    { label: 'Messages', onClick: () => alert('Messages clicked') },
    { label: 'Notifications', onClick: () => alert('Notifications clicked') },
    { label: 'Help', onClick: () => alert('Help clicked') },
  ],
  scrollable: true,
};