import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1224px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background:'gray';
  display: space-between;
  align-items: center;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  margin-bottom:50px
`;

export const Footer = styled.div`
  position: sticky;
  bottom: 0;
  background:'rd';
  display: space-between;
  align-items: center;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
`;