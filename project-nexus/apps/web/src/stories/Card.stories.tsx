import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: StoryFn = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  content: 'This is a default card content.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  content: 'This card has an image.',
  image: 'https://example.com/image.jpg',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Card with Footer',
  content: 'This card has a footer.',
  footer: 'Card Footer',
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  title: 'Card with Header',
  content: 'This card has a header.',
  header: 'Card Header',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Card with Actions',
  content: 'This card has actions.',
  actions: [
    { label: 'Action 1', onClick: () => alert('Action 1 clicked') },
    { label: 'Action 2', onClick: () => alert('Action 2 clicked') },
  ],
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  title: 'Card with Background Color',
  content: 'This card has a background color.',
  backgroundColor: 'lightgray',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  title: 'Card with Border',
  content: 'This card has a border.',
  border: '2px solid #000',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  title: 'Card with Shadow',
  content: 'This card has a shadow.',
  shadow: 'md',
};

export const WithRounded = Template.bind({});
WithRounded.args = {
  title: 'Card with Rounded Corners',
  content: 'This card has rounded corners.',
  rounded: 'lg',
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  title: 'Card with Padding',
  content: 'This card has padding.',
  padding: 'lg',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  title: 'Card with Margin',
  content: 'This card has margin.',
  margin: 'lg',
};

export const WithWidth = Template.bind({});
WithWidth.args = {
  title: 'Card with Width',
  content: 'This card has a specific width.',
  width: '300px',
};

export const WithHeight = Template.bind({});
WithHeight.args = {
  title: 'Card with Height',
  content: 'This card has a specific height.',
  height: '200px',
};

export const WithMaxWidth = Template.bind({});
WithMaxWidth.args = {
  title: 'Card with Max Width',
  content: 'This card has a maximum width.',
  maxWidth: '400px',
};

export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
  title: 'Card with Max Height',
  content: 'This card has a maximum height.',
  maxHeight: '300px',
};

export const WithMinWidth = Template.bind({});
WithMinWidth.args = {
  title: 'Card with Min Width',
  content: 'This card has a minimum width.',
  minWidth: '200px',
};

export const WithMinHeight = Template.bind({});
WithMinHeight.args = {
  title: 'Card with Min Height',
  content: 'This card has a minimum height.',
  minHeight: '150px',
};

export const WithOverflow = Template.bind({});
WithOverflow.args = {
  title: 'Card with Overflow',
  content: 'This card has overflow content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  overflow: 'auto',
  height: '150px',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  title: 'Card with Custom Style',
  content: 'This card has custom styles.',
  style: { borderRadius: '20px', backgroundColor: '#f0f8ff' },
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  title: 'Card with Class Name',
  content: 'This card has a custom class name.',
  className: 'custom-card',
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  title: 'Card with Loading',
  content: 'This card is loading.',
  loading: true,
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  title: 'Card with Disabled',
  content: 'This card is disabled.',
  disabled: true,
};

export const WithResponsive = Template.bind({});
WithResponsive.args = {
  title: 'Card with Responsive',
  content: 'This card is responsive.',
  responsive: true,
};