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

export const WithIcon = Template.bind({});
WithIcon.args = {
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
    { label: 'Profile', active: true, onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Messages', badge: '5', onClick: () => alert('Messages clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  styles: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
  },
};

export const WithOnTabChange = Template.bind({});
WithOnTabChange.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  onTabChange: (tab: { label: string }) => alert(`Tab changed to: ${tab.label}`),
};

export const WithDisabledTab = Template.bind({});
WithDisabledTab.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', disabled: true, onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
};

export const WithVerticalOrientation = Template.bind({});
WithVerticalOrientation.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  vertical: true,
};

export const WithFullWidthTabs = Template.bind({});
WithFullWidthTabs.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  fullWidth: true,
};