import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import marvelApi from "../../services/marvel-api";
import { useParams } from "react-router-dom";
import ComicSection from '../../components/ComicSection'
import {
  Container,
  Content,
  ContainerImage,
  Image,
  ContainerInfo,
  Title,
  Description,
} from "./styles";

function Character() {
  let { id } = useParams();
  const [comics, setComics] = useState([]);
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    async function loadCharacters() {
      const response = await marvelApi.get(
        `/characters/${id}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response);
      setCharacter(response.data.data.results[0]);
    }
    async function loadComics() {
      const response = await marvelApi.get(
        `/characters/${id}/comics?apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response);
      setComics(response.data.data.results);
    }
    loadCharacters();
    loadComics();
  }, []);
  return (
    <Layout>
      <Container>
        <Content>
          <ContainerImage>
            <Image 
             src={
              character.thumbnail
                ? character.thumbnail.path + "/portrait_uncanny.jpg"
                : "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_uncanny.jpg"
            } />
          </ContainerImage>
          <ContainerInfo>
            <Title>{character.name}</Title>
            <Description>
              {character.description}
            </Description>
          </ContainerInfo>
        </Content>
        <ComicSection data={comics} title="Quadrinhos em que esteve presente" />
      </Container>
    </Layout>
  );
}

export default Character;
