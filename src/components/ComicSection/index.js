import React from 'react';

import ComicCard from '../ComicCard';
import { Container, Content, ScrollContent } from './styles';

export default function ProductSession({ title, scrollEnabled = false }) {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        {scrollEnabled ? (
          <ScrollContent>
            <ComicCard />
            <ComicCard />
            <ComicCard />
          </ScrollContent>
        ) : (
            <>
              <ComicCard />
              <ComicCard />
              <ComicCard />
            </>
          )}
      </Content>
    </Container>
  );
}