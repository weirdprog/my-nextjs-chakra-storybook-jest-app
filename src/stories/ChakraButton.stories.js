import React from 'react';

import { ChakraButton } from './ChakraButton';

export default {
  title: 'Example/ChakraButton',
  component: ChakraButton,
};

const Template = (args) => <ChakraButton {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
  colorScheme: 'teal'
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  colorScheme: 'teal'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  colorScheme: 'teal'
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  colorScheme: 'teal'
};

export const MediumGray = Template.bind({});
MediumGray.args = {
  size: 'md',
  colorScheme: 'gray'
};