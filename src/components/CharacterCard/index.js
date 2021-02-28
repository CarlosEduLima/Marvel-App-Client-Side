import React from 'react';

import { Container, ContainerModal, Content, ContainerFooter, Footer, Title, Subtitle } from './styles';

export default function ProductCard() {
  return (
    <Container>
      <img src='http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_uncanny.jpg' alt="Sanduíche" />
      <ContainerModal>
        <Content>
          <img src='http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_uncanny.jpg' alt="Sanduíche" />
          <ContainerFooter>
            <Footer>
              <Title>Name</Title>
              <Subtitle>From</Subtitle>
            </Footer>
          </ContainerFooter>
        </Content>
      </ContainerModal>
    </Container>
  );
}