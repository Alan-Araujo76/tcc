import LinhaSep from '../../assets/img/linha-sep-cab.png';
import Face from '../../assets/img/logo-face-rod.png';
import TT from '../../assets/img/logo-tt-rod.png';
import Insta from '../../assets/img/logo-insta-rod.png';



import { Container } from './styled';

export default function Rodape() {
    return(
        <Container>
            <div className="barra"> <img src={LinhaSep} alt="" /> </div>
          <div className="qlq-coisa">
            <div className="parte1">
                Movies<span style={{color: "#FF005C",  fontweight: "none"}}> World</span>
            </div>

            <div className="parte2">

                <div className="parte-p1">
                    <div className="titulo-g">Duvidas? Entre em contato</div>
                    <div className="titulo-p2">Formas de contato</div>
                    <div className="bloco1-p1">
                        <div className="subtitulo">Emails</div>
                        <div className="emails-b1">
                            <div className="e1">eusoulindo@egato.com</div>
                            <div className="e1">eusoulindo@egato.com</div>
                            <div className="e1">eusoulindo@egato.com</div>
                        </div>
                        <div className="subtitulo">Telefones</div>
                        <div className="emails-b1">
                            <div className="e1">11 91011-1213</div>
                            <div className="e1">11 91415-1617</div>
                        </div>
                    </div>
                </div>

                <div className="parte-p2">
                    <div className="titulo-d">Sobre nós</div>
                    <div className="bloco1-p1">
                        <div className="emails-b1">
                            <div className="e1">Não sei o que colocar  hehe 0.0</div>
                            <div className="e1">Não sei o que colocar  hehe 0.0</div>
                            <div className="e1">Não sei o que colocar  hehe 0.0</div>
                            <div className="e1">Não sei o que colocar  hehe 0.0</div>
                            <div className="e1">Não sei o que colocar  hehe 0.0</div>
                            <div className="e1">Não sei o que colocar  hehe 0.0</div>
                            <div className="e1">Não sei o que colocar  hehe 0.0</div>
                            <div className="e1">Não sei o que colocar  hehe 0.0</div>
                        </div>
                    </div>
                </div>

                <div className="parte-p3">
                    <div className="titulo-p2"></div>
                    <div className="bloco1-p1">
                        <div className="titulo-d">Redes Sociais</div>
                        <div className="img-b1">
                            <div className="redes-s"><img src={Face} alt="" /></div>
                            <div className="redes-s1"><img src={Insta} alt="" /></div>
                            <div className="redes-s2"><img src={TT} alt="" /></div>
                        </div>

                        <div className="subtitulos">
                            <div className="sub1">Termos de uso</div>
                            <div className="sub1">Declaração de privacidade</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Container>
    )
}