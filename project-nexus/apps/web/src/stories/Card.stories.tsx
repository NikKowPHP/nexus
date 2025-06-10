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
  content: 'This is a default card with basic content.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  image: 'https://example.com/image.jpg',
  content: 'This card has an image at the top.',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Card with Footer',
  content: 'This card has a footer section.',
  footer: 'Card Footer',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Card with Actions',
  content: 'This card has action buttons.',
  actions: [
    { label: 'Action 1', onClick: () => alert('Action 1 clicked') },
    { label: 'Action 2', onClick: () => alert('Action 2 clicked') },
  ],
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  title: 'Card with Header',
  header: 'Card Header',
  content: 'This card has a header section.',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  title: 'Card with Background Color',
  content: 'This card has a custom background color.',
  style: { backgroundColor: '#f0f8ff' },
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  title: 'Card with Border',
  content: 'This card has a border.',
  bordered: true,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  title: 'Card with Shadow',
  content: 'This card has a shadow effect.',
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
  content: 'This card has custom padding.',
  padding: 'lg',
};

export const WithMaxWidth = Template.bind({});
WithMaxWidth.args = {
  title: 'Card with Max Width',
  content: 'This card has a maximum width.',
  maxWidth: 'sm',
};

export const WithCentered = Template.bind({});
WithCentered.args = {
  title: 'Centered Card',
  content: 'This card content is centered.',
  centered: true,
};

export const WithHoverEffect = Template.bind({});
WithHoverEffect.args = {
  title: 'Card with Hover Effect',
  content: 'Hover over this card to see the effect.',
  hoverEffect: true,
};

export const WithClickable = Template.bind({});
WithClickable.args = {
  title: 'Clickable Card',
  content: 'Click this card to trigger an action.',
  onClick: () => alert('Card clicked'),
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  title: 'Loading Card',
  content: 'This card is in a loading state.',
  loading: true,
};

export const WithError = Template.bind({});
WithError.args = {
  title: 'Error Card',
  content: 'This card is in an error state.',
  error: true,
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  title: 'Custom Styled Card',
  content: 'This card has custom styles.',
  style: { border: '2px solid #000', padding: '20px' },
};