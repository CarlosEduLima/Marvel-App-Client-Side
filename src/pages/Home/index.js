import React, {useState, useEffect} from "react";
import Layout from "../../components/Layout";
import ComicSection from "../../components/ComicSection";
import CharacterSection from '../../components/CharacterSection'
import { Container, Content } from "./style";
import marvelApi from "../../services/marvel-api";

const Home = () => {
  const [comics, setComics] = useState([]);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function loadComics() {
      const response = await marvelApi.get(
        `/comics?dateDescriptor=thisWeek&limit=8&apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response.data.data.results);
      setComics(response.data.data.results);
    }
    async function loadCharacters() {
      const response = await marvelApi.get(
        `/characters?limit=15&apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response.data.data.results);
      setCharacters(response.data.data.results);
    }
    loadCharacters();
    loadComics();
  }, []);
  return (
    <Layout>
      <Container>
          <ComicSection data={comics} title="Quadrinhos desta semana" />
        
      </Container>
      <Container>
      <CharacterSection data={characters} title="Personagens que você talvez goste" />
      </Container>
    </Layout>
  );
};

export default Home;
