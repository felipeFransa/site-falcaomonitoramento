import { Header } from './components/Header';
import { Main } from './components/Main';
import { Services } from './components/Services';
import { About } from './components/About';
import { UserInfo } from './components/UserInfo';
import { Container } from './Global.style';
import { Footer } from './components/footer';

const App = () => {

  return (
      <Container>
        <Header/>
        <Main/>
        <Services/>
        <UserInfo/>
        <Footer />
        <About/>
      </Container>
  )
}
export default App;
