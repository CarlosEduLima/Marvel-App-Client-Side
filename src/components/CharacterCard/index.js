import React from 'react';

import { Container, ContainerModal, Content, ContainerFooter, Footer, Title, Subtitle } from './styles';

export default function CharacterCard({character}) {
  return (
    <Container>
      <img  src={
         character.thumbnail
            ?character.thumbnail.path + "/portrait_uncanny.jpg"
            : "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_uncanny.jpg"
        } alt="Sanduíche" />
      <ContainerModal>
        <Content>
          <img  src={
         character.thumbnail
            ?character.thumbnail.path + "/portrait_uncanny.jpg"
            : "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_uncanny.jpg"
        } alt="Sanduíche" />
          <ContainerFooter>
            <Footer>
              <Title>{character.name}</Title>
            </Footer>
          </ContainerFooter>
        </Content>
      </ContainerModal>
    </Container>
  );
}