import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TabBar from '../components/TabBar';

export default {
  title: 'Components/TabBar',
  component: TabBar,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = (args) => <TabBar {...args} />;

export const AnimatedIndicator = Template.bind({});
AnimatedIndicator.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  animatedIndicator: true,
  activeTab: 'home',
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
};

export const WithActiveTab = Template.bind({});
WithActiveTab.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  activeTab: 'profile',
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  onChange: (value: string) => alert(`Selected tab: ${value}`),
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  backgroundColor: 'lightgray',
};

export const WithColor = Template.bind({});
WithColor.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  color: 'blue',
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  padding: 'lg',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  margin: 'lg',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  border: '2px solid #000',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  rounded: 'lg',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  shadow: 'md',
};

export const WithWidth = Template.bind({});
WithWidth.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  width: '100%',
};

export const WithHeight = Template.bind({});
WithHeight.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  height: '50px',
};

export const WithMinWidth = Template.bind({});
WithMinWidth.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  minWidth: '300px',
};

export const WithMinHeight = Template.bind({});
WithMinHeight.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  minHeight: '40px',
};

export const WithMaxWidth = Template.bind({});
WithMaxWidth.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  maxWidth: '600px',
};

export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  maxHeight: '70px',
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
    { label: 'Messages', value: 'messages' },
    { label: 'Notifications', value: 'notifications' },
  ],
  overflow: 'auto',
  width: '300px',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  style: { borderRadius: '20px', backgroundColor: '#f0f8ff' },
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  className: 'custom-tabbar',
};

export const WithResponsive = Template.bind({});
WithResponsive.args = {
  items: [
    { label: 'Home', value: 'home' },
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
  ],
  responsive: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  items: [
    { label: 'Home', value: 'home', icon: '🏠' },
    { label: 'Profile', value: 'profile', icon: '👤' },
    { label: 'Settings', value: 'settings', icon: '⚙️' },
  ],
};

export const WithIconPosition = Template.bind({});
WithIconPosition.args = {
  items: [
    { label: 'Home', value: 'home', icon: '🏠', iconPosition: 'right' },
    { label: 'Profile', value: 'profile', icon: '👤', iconPosition: 'right' },
    { label: 'Settings', value: 'settings', icon: '⚙️', iconPosition: 'right' },
  ],
};

export const WithIconColor = Template.bind({});
WithIconColor.args = {
  items: [
    { label: 'Home', value: 'home', icon: '🏠', iconColor: 'red' },
    { label: 'Profile', value: 'profile', icon: '👤', iconColor: 'green' },
    { label: 'Settings', value: 'settings', icon: '⚙️', iconColor: 'blue' },
  ],
};

export const WithIconSize = Template.bind({});
WithIconSize.args = {
  items: [
    { label: 'Home', value: 'home', icon: '🏠', iconSize: 'large' },
    { label: 'Profile', value: 'profile', icon: '👤', iconSize: 'large' },
    { label: 'Settings', value: 'settings', icon: '⚙️', iconSize: 'large' },
  ],
};

export const WithIconStyle = Template.bind({});
WithIconStyle.args = {
  items: [
    { label: 'Home', value: 'home', icon: '🏠', iconStyle: { marginRight: '5px' } },
    { label: 'Profile', value: 'profile', icon: '👤', iconStyle: { marginRight: '5px' } },
    { label: 'Settings', value: 'settings', icon: '⚙️', iconStyle: { marginRight: '5px' } },
  ],
};

export const WithIconClassName = Template.bind({});
WithIconClassName.args = {
  items: [
    { label: 'Home', value: 'home', icon: '🏠', iconClassName: 'home-icon' },
    { label: 'Profile', value: 'profile', icon: '👤', iconClassName: 'profile-icon' },
    { label: 'Settings', value: 'settings', icon: '⚙️', iconClassName: 'settings-icon' },
  ],
};