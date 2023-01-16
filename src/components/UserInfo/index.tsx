import { Information, Container, Users, UsersTitle, UsersTitleH2, UsersInfos, UsersPhoto} from "./style";
import FelipeIMG from '../../assets/img/felipe.jpg';

export const UserInfo = () => {
  return (
    <Information>
      <Container>
        <Users>
          <UsersTitle>
            <UsersTitleH2>Jackson Ferreira</UsersTitleH2>
          </UsersTitle>
          <UsersPhoto src={FelipeIMG} />
          <UsersInfos>
            B. Santa Lúcia <br />
            Região Centro Sul <br />
            31- 9 9628- 4620
        </UsersInfos>
        </Users>
        <Users>
          <UsersTitle>
            <UsersTitleH2>Jonas Matos</UsersTitleH2>
          </UsersTitle>
          <UsersPhoto src={FelipeIMG} />
          <UsersInfos>
            B. Carlos Prates <br />
            Região Noroeste <br />
            31- 9 9630 7252
        </UsersInfos>
        </Users><Users>
          <UsersTitle>
            <UsersTitleH2>Jamerson Henrique</UsersTitleH2>
          </UsersTitle>
          <UsersPhoto src={FelipeIMG} />
          <UsersInfos>
            B. Jardim América <br />
            Região Oeste <br />
            31 -9 9958-1818
        </UsersInfos>
        </Users>

        
      </Container>
    </Information>
  )
}