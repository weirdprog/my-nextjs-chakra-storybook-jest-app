import React from 'react';

import { ChakraButton } from './ChakraButton';

export default {
  title: 'Example/ChakraButton',
  component: ChakraButton
};

const Template = (args) => <ChakraButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  colorScheme: 'teal',
  label: 'Button'
};