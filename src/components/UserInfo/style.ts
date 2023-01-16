import styled from "styled-components";

export const Information = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
export const Container = styled.div`
  width: 900px;
  display:flex;
  justify-content: space-around;
  margin: 10px 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const Users = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 400px;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const UsersTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 3px;
`;
export const UsersTitleH2 = styled.h2`
  color: #fff;
  font-size: 1.1em;
`;
export const UsersPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 3px;
`
export const UsersInfos = styled.p`
  color: #fff;
  font-size: 1em;
`;