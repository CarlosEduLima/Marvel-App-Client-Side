import React from 'react';

import ProductCard from '../ProductCard';
import { Container, Content, ScrollContent } from './styles';

export default function ProductSession({ title, scrollEnabled = false }) {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        {scrollEnabled ? (
          <ScrollContent>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ScrollContent>
        ) : (
            <>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </>
          )}
      </Content>
    </Container>
  );
}