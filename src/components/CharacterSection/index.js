import React from "react";
import CharacterCard from "../CharacterCard";
import { Container, Content, ScrollContent } from "./styles";

export default function CharacterSession({title, data}) {
  return (
    <Container>
      <Content>
        <h2>{title}</h2> (
        <>
          {data.map( character => {
            <CharacterCard character={character} />;
          })}
        </>
      </Content>
    </Container>
  );
}
