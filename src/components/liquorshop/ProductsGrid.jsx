import React from 'react';
import { Container, Grid, rem } from '@mantine/core';
import Product from './Product';

const products = [
  {
    id: 1,
    title: 'Product 1',
    price: 20,
    imageSrc: '/img/drink1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 25,
    imageSrc: '/img/drink2.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    price: 20,
    imageSrc: '/img/drink8.jpg',
  },
  {
    id: 4,
    title: 'Product 4',
    price: 25,
    imageSrc: '/img/drink4.jpg',
  },
  {
    id: 5,
    title: 'Product 5',
    price: 20,
    imageSrc: '/img/drink10.jpg',
  },
  {
    id: 6,
    title: 'Product 6',
    price: 25,
    imageSrc: '/img/drink6.jpg',
  },
  {
    id: 7,
    title: 'Product 7',
    price: 20,
    imageSrc: '/img/drink7.jpg',
  },
  {
    id: 8,
    title: 'Product 8',
    price: 25,
    imageSrc: '/img/drink8.jpg',
  },
  {
    id: 9,
    title: 'Product 9',
    price: 20,
    imageSrc: '/img/drink9.jpg',
  },
  {
    id: 10,
    title: 'Product 10',
    price: 25,
    imageSrc: '/img/drink10.jpg',
  },
  // Add more products as needed
];
const ProductsGrid = () => {
  return (

    <Grid>
      {products.map((product) => (
        <Grid.Col key={product.id} span={3}>
          <Product
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
