import React from 'react';

import ProductDescription from './ProductDescription';

export default {
  component: ProductDescription,
  title: 'ProductDescription',
};

const Template = args => <ProductDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
  textAlign: 'center',
  fontWeight: 'normal',
  color: 'black',
  description: 'Test Description'
};