import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding:20px;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 900px;
  display:flex;
  justify-content: center;
`;
export const Logo = styled.div`
  align-items: center;
  text-align: center;
  font-size: 25px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Menu = styled.nav`
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
  `;
export const MenuItem = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const MenuLI = styled.li`
  color:#fff;
  padding: 25px;

  &:hover {
    background-color: #fff;
    color: #000;
    border-radius: 3px;
  }
`;
