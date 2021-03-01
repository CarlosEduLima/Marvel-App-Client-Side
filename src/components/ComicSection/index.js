import React, { useEffect, useState } from "react";
import ComicCard from "../ComicCard";
import { Container, Content, ScrollContent } from "./styles";

export default function ComicSession({ title, data }) {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        {data.map(item => (
          <ComicCard data={item} />
        ))}
      </Content>
    </Container>
  );
}
