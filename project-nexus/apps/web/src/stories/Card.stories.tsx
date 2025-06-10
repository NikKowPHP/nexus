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
  content: 'This card includes an image at the top.',
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

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Card with Footer',
  content: 'This card has a footer section.',
  footer: 'Footer content goes here.',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  title: 'Styled Card',
  content: 'This card has custom styles applied.',
  styles: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
  },
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  title: 'Card with Header',
  header: 'Header content goes here',
  content: 'This card has a header section.',
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  title: 'Loading Card',
  loading: true,
  content: 'Content is loading...',
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  title: 'Clickable Card',
  content: 'Click anywhere on this card.',
  onClick: () => alert('Card clicked'),
};

export const WithMedia = Template.bind({});
WithMedia.args = {
  title: 'Card with Media',
  media: {
    type: 'video',
    src: 'https://example.com/video.mp4',
  },
  content: 'This card includes a video.',
};