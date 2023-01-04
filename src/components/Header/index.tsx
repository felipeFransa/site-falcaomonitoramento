import { Logo, Cabecalho, Container, MenuItem, MenuLI, Menu } from './style'

export const Header = () => {
  return (
    <Cabecalho>
      <Container>
      <Logo>
        <h2>Falcao Monitoramento</h2>
      </Logo>
      <Menu>
        <MenuItem>
          <MenuLI>Inicio</MenuLI>
          <MenuLI>Services</MenuLI>
          <MenuLI>Contatos</MenuLI>
          <MenuLI>About</MenuLI>
        </MenuItem>
      </Menu>
      </Container>
    </Cabecalho>
  )
}