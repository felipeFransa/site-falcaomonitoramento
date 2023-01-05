import styled from "styled-components";

export const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
export const Container = styled.div`
  width: 900px;
  display:flex;
  justify-content: space-around;
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
`;
export const UsersTitle = styled.div`
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
  border: 1px solid white;
  border-radius: 3px;
`;
export const UsersTitleH2 = styled.h2`
  color: #fff;
  font-size: 20px;
`;
export const UsersTitleP = styled.p`
  color: #fff;
  font-size: 15px;
  margin-left: 5px;
  margin-right: 5px;
`;