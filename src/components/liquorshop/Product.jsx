import React from 'react';
import { Card, Image, Text } from '@mantine/core';

const Product = ({ imageSrc, title, price }) => {
  return (
    <Card shadow="sm" style={{ maxWidth: 300 }}>
      <Image src={imageSrc} alt={title} height={200} />
      <div style={{ padding: '12px 16px' }}>
        <Text weight={500} size="md">
          {title}
        </Text>
        <Text>${price}</Text>
      </div>
    </Card>
  );
};

export default Product;
