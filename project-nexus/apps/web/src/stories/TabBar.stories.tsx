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
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  tabs: [
    { label: 'Home', icon: '🏠', content: 'Home Content' },
    { label: 'Search', icon: '🔍', content: 'Search Content' },
    { label: 'Settings', icon: '⚙️', content: 'Settings Content' },
  ],
};

export const WithBadges = Template.bind({});
WithBadges.args = {
  tabs: [
    { label: 'Messages', badge: '5', content: 'Messages Content' },
    { label: 'Notifications', badge: '3', content: 'Notifications Content' },
    { label: 'Updates', badge: '1', content: 'Updates Content' },
  ],
};