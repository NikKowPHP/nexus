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
  tabs: ['Home', 'Profile', 'Settings'],
  activeTab: 'Home',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  tabs: [
    { label: 'Home', icon: '🏠' },
    { label: 'Profile', icon: '👤' },
    { label: 'Settings', icon: '⚙️' },
  ],
  activeTab: 'Home',
};