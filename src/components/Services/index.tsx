import { CardDescription, CardTitle, CardsServises, Container, ServicesProvision, TitleContainer, Title, ContainerCards, MessageService } from './style'

export const Services = () => {
  return (
    <ServicesProvision>
      <Container>
        <TitleContainer>
          <Title> SERVIÇOS</Title>
        </TitleContainer>
        <ContainerCards>
          <CardsServises>
            <CardTitle>
              <Title>ACOMPANHAMENTO</Title>
            </CardTitle>
            <CardDescription>
              <MessageService>
              Acompanhamento de saída e chegada residencial (trabalho, faculdade, curso, festa e etc…).
              </MessageService>
            </CardDescription>
          </CardsServises>

          <CardsServises>
            <CardTitle>
              <Title>APOIO</Title>
            </CardTitle>
            <CardDescription>
              <MessageService>
              Em casos de urgência, realizamos tarefas auxiliares como, retirada e entrega de medicamentos, alimentos e primeiro socorros.
              </MessageService>
            </CardDescription>
          </CardsServises>

          <CardsServises>
            <CardTitle>
              <Title>AVERIGUAÇÃO</Title>
            </CardTitle>
            <CardDescription>
              <MessageService>
              Averiguar barulhos estranhos, pessoas e movimentos suspeitos. Realizar o acionamento da polícia militar. Tudo com rapidez e eficácia.
              </MessageService>
            </CardDescription>
          </CardsServises>
        </ContainerCards>
      </Container>
    </ServicesProvision>
  )
}