import React from "react";
import CharacterSection from "../../components/CharacterSection";
import Layout from "../../components/Layout";
import {
  Container,
  Content,
  ContainerImage,
  Image,
  ContainerInfo,
  Title,
  Author,
  ReleaseDate,
} from "./styles";

function Comic() {
  return (
    <Layout>
      <Container>
        <Content>
          <ContainerImage>
            <Image src="http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg" />
          </ContainerImage>
          <ContainerInfo>
            <Title>Spider Man - Homecoming</Title>
            <Author>David, Pina</Author>
            <ReleaseDate>Publicado em 2008</ReleaseDate>
          </ContainerInfo>
        </Content>
        <CharacterSection title="Personagens" />
      </Container>
    </Layout>
  );
}

export default Comic;
