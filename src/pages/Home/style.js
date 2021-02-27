import styled from "styled-components";
export const Container = styled.div`
  flex: 1;
  margin-top: 30px;
  > ul {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: 380px;
    list-style: none;
    width: 100%;
    justify-items: center;
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const CardItem = styled.div``;
