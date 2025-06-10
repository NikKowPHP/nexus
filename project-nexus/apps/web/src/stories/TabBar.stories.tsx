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
  items: [
    { label: 'Home', icon: '🏠' },
    { label: 'Search', icon: '🔍' },
    { label: 'Notifications', icon: '🔔', count: 5 },
    { label: 'Profile', icon: '👤' },
  ],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  items: [
    { label: 'Home', icon: '🏠' },
    { label: 'Search', icon: '🔍' },
    { label: 'Notifications', icon: '🔔' },
    { label: 'Profile', icon: '👤' },
  ],
  styles: {
    backgroundColor: '#fff',
    borderTop: '1px solid #ddd',
    padding: '8px 0',
  },
};

export const WithActiveTab = Template.bind({});
WithActiveTab.args = {
  items: [
    { label: 'Home', icon: '🏠' },
    { label: 'Search', icon: '🔍' },
    { label: 'Notifications', icon: '🔔' },
    { label: 'Profile', icon: '👤' },
  ],
  activeTab: 1,
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  items: [
    { label: 'Home', icon: '🏠' },
    { label: 'Search', icon: '🔍' },
    { label: 'Notifications', icon: '🔔' },
    { label: 'Profile', icon: '👤' },
  ],
  onClick: (index: number) => alert(`Tab ${index} clicked`),
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  items: [
    { label: 'Home', icon: '🏠' },
    { label: 'Search', icon: '🔍' },
    { label: 'Notifications', icon: '🔔', badge: 'New' },
    { label: 'Profile', icon: '👤' },
  ],
};