import styled from 'styled-components';
const maxWidth = 990;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  width: 100%;
`;
export const Content = styled.div`
  width: 100%;
  max-width: ${maxWidth}px;

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
  white-space: nowrap;
`;