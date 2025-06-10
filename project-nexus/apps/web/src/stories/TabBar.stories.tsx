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
    { label: 'Home', badge: '99+', onClick: () => alert('Home clicked') },
    { label: 'Profile', badge: '3', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const WithActiveTab = Template.bind({});
WithActiveTab.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  activeTab: 1,
};

export const WithVertical = Template.bind({});
WithVertical.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  vertical: true,
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  fullWidth: true,
};

export const WithCentered = Template.bind({});
WithCentered.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  centered: true,
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  style: { backgroundColor: '#f0f8ff', color: '#333' },
};

export const WithOnTabChange = Template.bind({});
WithOnTabChange.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  onTabChange: (index: number) => alert(`Tab changed to: ${index}`),
};

export const WithDisabledTab = Template.bind({});
WithDisabledTab.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', disabled: true, onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
    { label: 'Messages', onClick: () => alert('Messages clicked') },
    { label: 'Notifications', onClick: () => alert('Notifications clicked') },
    { label: 'More', onClick: () => alert('More clicked') },
  ],
  overflow: true,
};