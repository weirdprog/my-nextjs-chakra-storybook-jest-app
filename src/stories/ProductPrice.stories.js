import React from 'react';

import ProductPrice from './ProductPrice';

export default {
  component: ProductPrice,
  title: 'ProductPrice',
};

const Template = args => <ProductPrice {...args} />;

export const Default = Template.bind({});
Default.args = {
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'teal',
  price: '$100.00'
};