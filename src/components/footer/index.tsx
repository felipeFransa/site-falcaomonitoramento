import * as F from './style';
import LogoIMG from '../../assets/img/logo.png';

export const Footer = () => {
  return (
    <F.FooterContainer>
      <F.Container>
        <F.TextContainer>
          <F.TitleText>
            Nossos Horários!
          </F.TitleText>
          <F.InfosText>
            21:00 As  05:00  (Segunda a Sábado) <br />
            Consulta horário de trabalho com vigilante local. <br />
            31-996284629 <br />
            js@falcaomonitoramento.com
          </F.InfosText>
        </F.TextContainer>
        <F.ImageContainer>
          <F.Image src={LogoIMG}/>
        </F.ImageContainer>
      </F.Container>
    </F.FooterContainer>
  )
}