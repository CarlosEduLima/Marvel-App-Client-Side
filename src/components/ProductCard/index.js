import React from 'react';

import { Container, ContainerModal, Content, ContainerFooter, Footer, Title, Subtitle } from './styles';

export default function ProductCard() {
  return (
    <Container>
      <img src='http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg' alt="Sanduíche" />
      <ContainerModal>
        <Content>
          <img src='http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg' alt="Sanduíche" />
          <ContainerFooter>
            <Footer>
              <Title>Comic name</Title>
              <Subtitle>Comic type</Subtitle>
              <span>Produto, edição limitada, serie: 345213. modelo: 2018...</span>
            </Footer>
          </ContainerFooter>
        </Content>
      </ContainerModal>
    </Container>
  );
}