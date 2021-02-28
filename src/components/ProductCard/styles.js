import styled, { keyframes } from 'styled-components';

const scaleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.76);
  }

  60% { 
    opacity: 0;
    transform: scale(0.76);
  }

  80% {
    opacity: 1;
    transform: scale(1);
  }
`

export const ContainerModal = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 260px;
  background-color: #FFF;
  white-space: normal;
  -webkit-box-shadow: 0px 0px 11px 5px rgba(0,0,0,0.09);
  -moz-box-shadow: 0px 0px 11px 5px rgba(0,0,0,0.09);
  box-shadow: 0px 0px 11px 5px rgba(0,0,0,0.09);
  border-radius: 5px;
  transform-origin: 0% 0%;
  transform: scale(1);
  pointer-events: none;
  transition: 0.4s all;
  opacity: 0;

  &:hover { 
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  background-color: #FFF;
  margin: 0 10px 20px 10px;
  white-space: normal;
  -webkit-box-shadow: 0px 0px 11px 5px rgba(0,0,0,0.09);
  -moz-box-shadow: 0px 0px 11px 5px rgba(0,0,0,0.09);
  box-shadow: 0px 0px 11px 5px rgba(0,0,0,0.09);

  img {
    width: 200px;
  }

  &:hover ${ContainerModal} {
    opacity: 1;
    pointer-events: auto;
    animation-delay: 1s;
    animation: ${scaleAnimation} 0.5s;
  }
`;

export const Content = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  img {
    width: 100%;
  }

  span {
    width: 100%;
    font-size: 15px;
    color: #999;
  }
`;


export const ContainerFooter = styled.div`
  padding: 15px;
  padding-bottom: 20px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 17px;
  width: 100%;
`;

export const Subtitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #555;
  width: 100%;
`;