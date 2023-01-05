import { Header } from './components/Header';
import { Main } from './components/Main';
import { Services } from './components/Services';
import { About } from './components/About';
import { UserInfo } from './components/UserInfo';

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Services/>
      <UserInfo/>
      <About/>
    </div>
  )
}
export default App;
