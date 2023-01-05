import { Information, Container, Users, UsersTitle, UsersTitleH2, UsersTitleP} from "./style"

export const UserInfo = () => {
  return (
    <Information>
      <Container>
        <Users>
          <UsersTitle>
            <UsersTitleH2>Bairros 1</UsersTitleH2>
          </UsersTitle>
          <UsersTitleP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolore vero in distinctio quae ipsa aperiam natus earum, tempore incidunt, ea iste accusantium fugiat ab hic debitis tempora ipsam doloribus.</UsersTitleP>
        </Users>
        <Users>
          <UsersTitle>
            <UsersTitleH2>Bairros 2</UsersTitleH2>
          </UsersTitle>
          <UsersTitleP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolore vero in distinctio quae ipsa aperiam natus earum, tempore incidunt, ea iste accusantium fugiat ab hic debitis tempora ipsam doloribus.</UsersTitleP>
        </Users>
        <Users>
        <UsersTitle>
            <UsersTitleH2>Bairros 3</UsersTitleH2>
          </UsersTitle>
          <UsersTitleP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolore vero in distinctio quae ipsa aperiam natus earum, tempore incidunt, ea iste accusantium fugiat ab hic debitis tempora ipsam doloribus.</UsersTitleP>
        </Users>
      </Container>
    </Information>
  )
}