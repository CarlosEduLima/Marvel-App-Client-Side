import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterSection from "../../components/CharacterSection";
import Layout from "../../components/Layout";
import marvelApi from "../../services/marvel-api";
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
  let { id } = useParams();
  const [comic, setComic] = useState([]);
  const [characters, setCharacter] = useState([]);
  useEffect(() => {
    async function loadComic() {
      const response = await marvelApi.get(
        `/comics/${id}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response);
      setComic(response.data.data.results[0]);

      marvelApi.get(
        `/comics/${id}/characters?apikey=${process.env.REACT_APP_API_KEY}`
      ).then((res) =>{
        setCharacter(res.data.data.results);
      })
      
      
    }
    loadComic();
  }, []);
  return (
    <Layout>
      <Container>
        <Content>
          <ContainerImage>
            <Image
              src={
                comic.thumbnail
                  ? comic.thumbnail.path + "/portrait_uncanny.jpg"
                  : "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_uncanny.jpg"
              }
            />
          </ContainerImage>
          <ContainerInfo>
            <Title>{comic.title}</Title>
            <Author>{comic.format}</Author>
            <ReleaseDate>{comic.pageCount} Páginas</ReleaseDate>
          </ContainerInfo>
        </Content>
          <CharacterSection characters={characters} title="Personagens" />;
      </Container>
    </Layout>
  );
}

export default Comic;
