import styled from 'styled-components';

export const Container = styled.div`
    width: 220px;
    height: 280px;
    background: transparent;
    padding: 0;
    position:absolute;
  
`;

export const ComicCover = styled.div`
>img{
    width: 80%;
    height: 93%;
    left: 0;
    border: 1px solid #000000;
    padding: 0;
    position: absolute;
    background: yellow;
}
   
  
`;

export const InfoContainer = styled.div`
       width: 60%;
    z-index: 2;
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

