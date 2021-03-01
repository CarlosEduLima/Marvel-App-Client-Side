import styled from 'styled-components';
const maxWidth = 990;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  width: 100%;
  margin-top: 30px;
`;
export const Content = styled.div`
  width: 100%;
  max-width: ${maxWidth}px;
  margin-top: 50px;

  h2 {
    font-family: ${props => props.theme.secondary_font};
    font-size: 28px;
    color: #444;
    margin: 25px 10px;
  }
`;


export const ScrollContent = styled.div`
  width: 100%;
  max-width: ${maxWidth}px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;