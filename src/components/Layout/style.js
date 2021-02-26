import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
    width: 100vw;
    margin: 0 auto;
    
    background-color: #ED1B24;
`;

export const Wrapper = styled.div`
     max-width: 990px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    background: green;
    height: 100%;
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  width: 100%;
  height: 60px;
  top: 0;
  background: gray;
  display: flex;
  align-items: center;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  margin-bottom:50px
`;

export const Footer = styled.div`
position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 990px;
    height: 60px;
    background-color: blue;
    color: white;
    text-align: center;
`;