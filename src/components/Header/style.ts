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
  justify-content: space-between;
`;
export const Menu = styled.nav`
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;
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
`;
export const Logo = styled.div`
  align-items: center;
  text-align: center;
  font-size: 25px;
  color: #fff;
`;