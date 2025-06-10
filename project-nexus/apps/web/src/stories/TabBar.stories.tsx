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

export const WithActiveTab = Template.bind({});
WithActiveTab.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Messages', onClick: () => alert('Messages clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
  ],
  activeTab: 1,
};

export const WithCentered = Template.bind({});
WithCentered.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
  ],
  centered: true,
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

export const WithRounded = Template.bind({});
WithRounded.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
  ],
  rounded: 'lg',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
  ],
  bordered: true,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
  ],
  shadow: 'md',
};

export const WithOnTabClick = Template.bind({});
WithOnTabClick.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
  ],
  onTabClick: (index: number) => alert(`Tab ${index} clicked`),
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
  ],
  style: { backgroundColor: '#f0f8ff' },
};

export const WithTabStyle = Template.bind({});
WithTabStyle.args = {
  tabs: [
    { label: 'Home', style: { color: 'blue' }, onClick: () => alert('Home clicked') },
    { label: 'Profile', style: { color: 'green' }, onClick: () => alert('Profile clicked') },
  ],
};

export const WithTabClassName = Template.bind({});
WithTabClassName.args = {
  tabs: [
    { label: 'Home', className: 'custom-tab', onClick: () => alert('Home clicked') },
    { label: 'Profile', className: 'custom-tab', onClick: () => alert('Profile clicked') },
  ],
};

export const WithTabDisabled = Template.bind({});
WithTabDisabled.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', disabled: true, onClick: () => alert('Profile clicked') },
  ],
};

export const WithTabTooltip = Template.bind({});
WithTabTooltip.args = {
  tabs: [
    { label: 'Home', tooltip: 'Go to Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', tooltip: 'View Profile', onClick: () => alert('Profile clicked') },
  ],
};

export const WithTabIconPosition = Template.bind({});
WithTabIconPosition.args = {
  tabs: [
    { label: 'Home', icon: '🏠', iconPosition: 'left', onClick: () => alert('Home clicked') },
    { label: 'Search', icon: '🔍', iconPosition: 'right', onClick: () => alert('Search clicked') },
  ],
};

export const WithTabBadge = Template.bind({});
WithTabBadge.args = {
  tabs: [
    { label: 'Home', badge: '99+', onClick: () => alert('Home clicked') },
    { label: 'Notifications', badge: '3', onClick: () => alert('Notifications clicked') },
  ],
};

export const WithTabBadgeColor = Template.bind({});
WithTabBadgeColor.args = {
  tabs: [
    { label: 'Home', badge: '99+', badgeColor: 'red', onClick: () => alert('Home clicked') },
    { label: 'Messages', badge: '5', badgeColor: 'green', onClick: () => alert('Messages clicked') },
  ],
};

export const WithTabLoading = Template.bind({});
WithTabLoading.args = {
  tabs: [
    { label: 'Home', loading: true, onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
  ],
};

export const WithResponsiveTabs = Template.bind({});
WithResponsiveTabs.args = {
  tabs: [
    { label: 'Home', onClick: () => alert('Home clicked') },
    { label: 'Profile', onClick: () => alert('Profile clicked') },
    { label: 'Settings', onClick: () => alert('Settings clicked') },
    { label: 'Help', onClick: () => alert('Help clicked') },
  ],
  responsive: true,
};