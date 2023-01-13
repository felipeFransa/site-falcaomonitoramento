import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
export const Container = styled.div`
  width: 900px;
  display:flex;
  justify-content: space-around;

  @media (max-width: 768px){
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
export const TextMain = styled.div`
  width: 100%;
  color: #fff;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ImageMain = styled.div`
  width: 100%;
  height: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`