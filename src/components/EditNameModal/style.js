import styled from 'styled-components';
import {CloseOutline} from '../../styles/icons';
export const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #FFFFFF;
text-align: center;
padding: 10px;
height: 100%;
width:100%;
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
  color: palevioletred;
  background: #F5F5F5;
  border-radius: 3px;
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

export const CloseButton = styled.button`
background: none;
border: none;
top:0;
right:0;
position: absolute
`;

export const CloseIcon = styled(CloseOutline)`
width: 20px;
height: 20px;
`;



