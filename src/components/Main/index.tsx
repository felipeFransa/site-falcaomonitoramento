import { Container, Content, ImageMain, MainContent, TextMain, Image } from './style'
import logo from '../../assets/img/logo.png'

export const Main = () => {
  return (
    <MainContent>
      <Container>
        <TextMain>
          <Content>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod, inventore, sapiente pariatur cumque iste at ullam officia ipsum exercitationem delectus in eveniet aut, officiis vero distinctio debitis omnis voluptas?</p>
            </div>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, a voluptatibus. Nobis molestias non dignissimos aperiam, quo numquam nihil natus porro qui tempore doloremque eaque et eius maiores! A, praesentium?</p>
            </div>
          </Content>
        </TextMain>
        <ImageMain>
          <Image src={logo} alt="logo" />
        </ImageMain>
      </Container>
    </MainContent>
  )
}