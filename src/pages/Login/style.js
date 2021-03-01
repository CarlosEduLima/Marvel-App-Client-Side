import styled from 'styled-components';
export const Container = styled.div`
  height: 100vh;
    width: 100vw;
    margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ED1B24;
`;


export const Wrapper = styled.div`
    max-width: 990px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    background-color: var(--white);
    height: 100%;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #FFFFFF;
text-align: center;
padding: 10px;
height: 340px;
width:400px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 3px;
> span {
        font-size: 14px;
        color: var(--secondary);
    }
`; 

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  height: 45px;
  font-size:14px;
  color: #000000;
  background: #F5F5F5;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  height: 45px;
  padding: 0.25em 1em;
  border-radius: 3px;
  font-weight: bold;
  background-color: #EE1B24;
  color: #FFFFFF;
  cursor: pointer;
`;
export const Logo = styled.img`
    width: 280px;
    height: 100px;
    margin-bottom: 15px
`;

export const LinkButton = styled.button`
    font-size:14px;
    font-weight: bold;
    color: var(--primary);
    background-color: none;
    cursor: pointer;
    > button:focus, button:active {
        border:none
    }
`;

