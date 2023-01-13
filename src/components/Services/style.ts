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
  justify-content: space-around;

  @media (max-width: 768px) {
    width:100%;
    flex-direction: column;
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
  font-size:20px;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;