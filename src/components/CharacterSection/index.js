import React from 'react';

import CharacterCard from '../CharacterCard';
import { Container, Content, ScrollContent } from './styles';

export default function ProductSession({ title, scrollEnabled = false }) {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        {scrollEnabled ? (
          <ScrollContent>
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
          </ScrollContent>
        ) : (
            <>
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
            </>
          )}
      </Content>
    </Container>
  );
}