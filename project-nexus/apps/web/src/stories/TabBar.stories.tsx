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
    { label: 'Home', icon: '🏠' },
    { label: 'Search', icon: '🔍' },
    { label: 'Notifications', icon: '🔔', count: 5 },
    { label: 'Profile', icon: '👤' },
  ],
};

export const WithActiveTab = Template.bind({});
WithActiveTab.args = {
  tabs: [
    { label: 'Home', icon: '🏠' },
    { label: 'Search', icon: '🔍' },
    { label: 'Notifications', icon: '🔔', count: 5 },
    { label: 'Profile', icon: '👤' },
  ],
  activeTab: 1,
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  tabs: [
    { label: 'Home', icon: '🏠' },
    { label: 'Search', icon: '🔍' },
    { label: 'Notifications', icon: '🔔', count: 5, badge: 'New' },
    { label: 'Profile', icon: '👤' },
  ],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  tabs: [
    { label: 'Home', icon: '🏠' },
    { label: 'Search', icon: '🔍' },
    { label: 'Notifications', icon: '🔔', count: 5 },
    { label: 'Profile', icon: '👤' },
  ],
  styles: {
    backgroundColor: '#333',
    color: '#fff',
    activeTabColor: '#ff0',
  },
};