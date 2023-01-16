import { Container, Content, ImageMain, MainContent, TextMain, Image, WelcomeTitle, WelcomeContainer, WelcomeMessageContainer, WelcomeMessage } from './style'
import logo from '../../assets/img/logo.png'

export const Main = () => {
  return (
    <MainContent>
      <Container>
        <TextMain>
          <Content>
            <WelcomeContainer>
              <WelcomeTitle>
                Bem Vindo a Falcão!
              </WelcomeTitle>
            </WelcomeContainer>
            <WelcomeMessageContainer>
              <WelcomeMessage>
              A Falcão Serviços é uma empresa de Ronda Motorizada no estado de Minas Gerais que tem como objetivo garantir o conforto da sua família ou empresa, mantendo seu patrimônio protegido.
              </WelcomeMessage>
            </WelcomeMessageContainer>
          </Content>
        </TextMain>
        <ImageMain>
          <Image src={logo} alt="logo" />
        </ImageMain>
      </Container>
    </MainContent>
  )
}