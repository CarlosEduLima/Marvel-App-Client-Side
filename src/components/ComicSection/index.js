import React, { useEffect, useState } from "react";
import ComicCard from "../ComicCard";
import { Container, Content, ScrollContent } from "./styles";
import marvelApi from "../../services/marvel-api";
export default function ComicSession({ title }) {
  const [comic, setComic] = useState([]);
  useEffect(() => {
    async function loadComics() {
      const response = await marvelApi.get(
        `/comics?dateDescriptor=thisWeek&limit=10&apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response.data.data.results);
      setComic(response.data.data.results);
    }
    loadComics();
  }, []);
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        {comic.map(item => (
          <ComicCard data={item} />
        ))}
      </Content>
    </Container>
  );
}
