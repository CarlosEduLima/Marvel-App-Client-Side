import styled from 'styled-components';
import {CloseOutline} from '../../styles/icons';

export const Container = styled.div`
    width: 280px;
    height: 330px;
    background: transparent;
    padding: 0;
    position:relative;
  
`;

export const ComicCover = styled.div`
>img{
    width: 80%;
    height: 93%;
    left: 0;
    padding: 0;
    position: absolute;
    border-radius: 4px;
}
`;

export const InfoContainer = styled.div`
    width: 60%;
    height: 100px;
    right: 0;
    bottom: 0;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
    padding: 5px;
    position: absolute;
    box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%), 0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%), 0 41.8px 33.4px rgb(0 0 0 / 9%), 0 100px 80px rgb(0 0 0 / 12%);
`;

export const Title = styled.div`
   >h3{
       color: #000000;
       font-size: 16px
   }
  
`;
export const Type = styled.div`
   >span{
       color: #000000;
       font-size: 12px;
       font-weight:500;
   }
  
`;
export const MoreInfoButton = styled.button`
  width: 80px;
  height: 20px;
  background: none;
  padding: 0;
  color: #000000;
  font-size: 12px
  
`;

export const ModalContainer = styled.div`
   width: 100%;
   height: 100%;
   display: block;
align-items: center;
justify-content: center;
overflow: auto
`;
export const ComicImg = styled.div`
>img{
    width: 300px;
    height: 450px;
    border-radius: 4px;
    top: 0;
}

width: 300px;
    height: 450px;
    padding: 0;
    top: 0
`;
export const DescriptionContainer = styled.div`
    background: #FFFFFF;
    margin-top: 15px;
    padding: 0 5px;
    >h4{
        color: #000000;
        font-size: 16px;
        font-weight: bold;
    }
    >p{
        color: #000000;
        font-size: 14px;
    }
    >span{
        color: #000000;
        font-size: 14px;
    }
`;
export const CreatorsContainer = styled.div`
    margin-top: 15px;
    padding: 0 5px;
    >span{
        color: #000000;
        font-size: 16px;
        font-weight: bold;
    }
    >ul{
        list-style: none;
        
    }
    >li{
        color: #000000;
        font-size: 14px;
    }
`;
export const CharactersContainer = styled.div`
    margin-top: 15px;
    padding: 0 5px;
    >span{
        color: #000000;
        font-size: 16px;
        font-weight: bold;
    }
    >ul{
        list-style: none;
        
    }
    >li{
        color: #000000;
        font-size: 14px;
    }
`;
export const CloseButton = styled.button`
background: none;
border: none;
top:0;
right:0;
position: absolute
`;

export const CloseIcon = styled(CloseOutline)`
width: 50px;
height: 50px;
`;

