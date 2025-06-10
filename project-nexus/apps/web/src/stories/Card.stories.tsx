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

export const WithHeader = Template.bind({});
WithHeader.args = {
  title: 'Card with Header',
  header: 'Card Header',
  content: 'This card has a header section.',
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

export const WithBackground = Template.bind({});
WithBackground.args = {
  title: 'Card with Background',
  content: 'This card has a custom background color.',
  style: { backgroundColor: '#f0f8ff', padding: '20px' },
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  title: 'Card with Border',
  content: 'This card has a custom border.',
  style: { border: '2px solid #007bff', borderRadius: '8px' },
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  title: 'Card with Shadow',
  content: 'This card has a shadow effect.',
  style: { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' },
};

export const WithPadding = Template.bind({});
WithPadding.args = {
  title: 'Card with Padding',
  content: 'This card has custom padding.',
  style: { padding: '30px' },
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  title: 'Card with Margin',
  content: 'This card has custom margin.',
  style: { margin: '20px' },
};

export const WithMaxWidth = Template.bind({});
WithMaxWidth.args = {
  title: 'Card with Max Width',
  content: 'This card has a maximum width.',
  style: { maxWidth: '400px', margin: '0 auto' },
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  title: 'Full Width Card',
  content: 'This card takes up the full width of its container.',
  style: { width: '100%' },
};

export const WithCustomClasses = Template.bind({});
WithCustomClasses.args = {
  title: 'Card with Custom Classes',
  content: 'This card uses custom CSS classes.',
  className: 'custom-card-class',
};