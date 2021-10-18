import LinhaSep from '../../../assets/img/linha-sep-cab.png';
import Face from '../../../assets/img/logo-face-rod.png';
import TT from '../../../assets/img/logo-tt-rod.png';
import Insta from '../../../assets/img/logo-insta-rod.png';

import Seta from '../../../assets/img/seta-sn.png';

import { Link } from 'react-router-dom';
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
                            <div className="e1">movieworld@gmail.com</div>
                            <div className="e1">mvmovieworldmv@bol.com.br</div>
                            <div className="e1">movieworldmv@hotmail.com.br</div>
                        </div>
                        <div className="subtitulo">Telefones</div>
                        <div className="emails-b1">
                            <div className="e1">11 91011-1213</div>
                            <div className="e1">11 91415-1617</div>
                        </div>
                    </div>
                </div>

                <div className="parte-p2">
                    <div className="titulo-d">Redes Sociais</div>
                    <div className="bloco1-p1">
                        <div className="redes">
                            <div className="p1">
                                <div className="redes-s"><img src={Face} alt="" /></div>
                                <div className="nome">FACEBOOK</div>
                            </div>
                            <div className="p1d">
                                <div className="redes-d"><img src={Insta} alt="" /></div>
                                <div className="nome-0">INSTAGRAM</div>
                            </div>
                            <div className="p1">
                                <div className="redes-s"><img src={TT} alt="" /></div>
                                <div className="nome-1">TWITER</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parte-p3">
                    <div className="titulo-p2"></div>
                    <div className="bloco1-p1">
                        <div className="titulo-d">Sobre Nós</div>
                        <div className="descricao">
                            Somos uma plataforma feita para os amantes do cinema! Só aqui você consegue ter...  
                        </div>

                        <div className="desc">
                            <Link to="/sobrenos">
                            Conheça mais sobre nós <img src={Seta} alt="" />
                            </Link>
                        </div>

                        <div className="subtitulos">
                            <div className="titulo-p2d">Termos de uso</div>
                            <div className="titulo-p2di">Declaração de privacidade</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          
          <div className="mobile">
            <div className="parte1">
                <div className="1-p1">
                    <div className="tit">Movies<span style={{color: "#FF005C",  fontweight: "none"}}> World</span></div>
                </div>

                <div className="redes">
                    <div className="titulo-d">Redes Sociais</div>
                    <div className="img-b1">
                        <div className="redes-s"><img src={Face} alt="" /></div>
                        <div className="redes-s1"><img src={Insta} alt="" /></div>
                        <div className="redes-s2"><img src={TT} alt="" /></div>
                    </div>
                </div>

                <div className="subtitulos">
                    <div className="titulo-p2d">Termos de uso</div>
                    <div className="titulo-p2di">Declaração de privacidade</div>
                </div>
            </div>



            <div className="parte2">
                <div className="titulo-p2">Duvidas? Entre em contato</div>
                <div className="subtitulo">Formas de contato</div>

                <div className="conteudo">
                    <div className="sla">
                        <div className="sub-subtitulo">Emails:</div>
                        <div className="b-p2">
                            <div className="email">movieworld@gmail.com</div>
                            <div className="email">mvmovieworld@bol.com.br</div>
                            <div className="email">movieworldmv@hotmail.com.br</div>
                        </div>
                    </div>

                    <div className="sla">
                        <div className="sub-subtitulo">Telefones:</div>
                        <div className="b-p2">
                            <div className="email">+55 (11) 91011-1213</div>
                            <div className="email">+55 (11) 91415-1617</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>




        </Container>
    )
}