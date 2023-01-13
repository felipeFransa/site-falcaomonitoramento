import { Logo, Container, MenuItem, MenuLI, Menu, HeaderContainer } from './style'

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
      <Logo>
        <h2>Falcão Monitoramento</h2>
      </Logo>
      <Menu>
        <MenuItem>
          <MenuLI>Home</MenuLI>
          <MenuLI>Services</MenuLI>
          <MenuLI>About</MenuLI>
        </MenuItem>
      </Menu>
      </Container>
    </HeaderContainer>
  )
}