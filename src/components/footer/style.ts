import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 900px;
  display:flex;
  justify-content: space-between;
  margin: 10px 0;

  @media (max-width: 768px) {
    width: auto !important;
    flex-direction: column-reverse;
  }
`;
export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const TitleText = styled.div`
  flex: 1;
  color: #fff;
  font-size: 1.5rem;

  @media (max-width: 768) {
    font-size: 0.5rem;
  }
`;
export const InfosText = styled.div`
  flex: 1;
  color: #fff;
  font-size: 1.2rem;
`;
export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
`;