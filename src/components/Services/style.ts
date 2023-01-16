import styled from "styled-components";

export const ServicesProvision = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
export const Container = styled.div`
  width: 900px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    width:100%;
    flex-direction: column;
  }
`;
export const ContainerCards = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width:100%;
    flex-direction: column;
  }
`;
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Title = styled.h2`
  color: #fff;
  font-size: 1.5rem;
`;
export const MessageService = styled.p`
  font-size: 1.1rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const CardsServises = styled.div`
  color: #fff;
  flex: 1;
`;
export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
`;