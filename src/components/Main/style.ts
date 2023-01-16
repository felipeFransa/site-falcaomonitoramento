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
  margin-bottom: 20px;
  

  @media (max-width: 768px){
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
export const TextMain = styled.div`
  width: 100%;
  color: #fff;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WelcomeTitle = styled.h2`
  font-size: 2.2rem;
`;
export const WelcomeMessageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WelcomeMessage = styled.p`
  font-size: 1rem;
  margin: 0 10px;
`;

export const ImageMain = styled.div`
  width: 100%;
  height: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`