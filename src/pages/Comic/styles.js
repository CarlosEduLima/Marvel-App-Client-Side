import styled from 'styled-components';
const maxWidth = 990;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f6fa;
  overflow: auto;
  padding-bottom: 200px;

`;

export const Content = styled.div`
  width: 100%;
  margin-top: 180px;
  max-width: ${maxWidth}px;
  padding: 0 20px;
  margin-top: 100px;
  @media(max-width: 830px) {
    text-align: center;
  }
`;
export const ContainerImage = styled.div`
  display: inline-block;
  justify-content: center;

  @media(max-width: 830px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
`;
export const Image = styled.img``;
export const ContainerInfo = styled.div`
  display: inline-block;
  vertical-align:top;
  padding: 0 40px;
`;
export const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
`;
export const Author = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #555;
`;
export const ReleaseDate = styled.div`
  color: #555;
`;