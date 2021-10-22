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
            <div className="barra-r"> <img src={LinhaSep} alt="" /> </div>
            <div className="qlq-coisa-r">
            <div className="parte1-r">
                Movies<span style={{color: "#FF005C",  fontweight: "none"}}> World</span>
            </div>

            <div className="parte2-r">

                <div className="parte-p1-r">
                    <div className="titulo-g-r">Duvidas? Entre em contato</div>
                    <div className="titulo-p2-r">Formas de contato</div>
                    <div className="bloco1-p1-r">
                        <div className="subtitulo-r">Emails</div>
                        <div className="emails-b1-r">
                            <div className="e1-r">movieworld@gmail.com</div>
                            <div className="e1-r">mvmovieworldmv@bol.com.br</div>
                            <div className="e1-r">movieworldmv@hotmail.com.br</div>
                        </div>
                        <div className="subtitulo-r">Telefones</div>
                        <div className="emails-b1-r">
                            <div className="e1-r">11 91011-1213</div>
                            <div className="e1-r">11 91415-1617</div>
                        </div>
                    </div>
                </div>

                <div className="parte-p2-r">
                    <div className="titulo-d-r">Redes Sociais</div>
                    <div className="bloco1-p1-r">
                        <div className="redes-r">
                            <div className="p1-r">
                                <div className="redes-s-r"><img src={Face} alt="" /></div>
                                <div className="nome-r">FACEBOOK</div>
                            </div>
                            <div className="p1d-r">
                                <div className="redes-d-r"><img src={Insta} alt="" /></div>
                                <div className="nome-0-r">INSTAGRAM</div>
                            </div>
                            <div className="p1">
                                <div className="redes-s-r"><img src={TT} alt="" /></div>
                                <div className="nome-1-r">TWITER</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parte-p3-r">
                    <div className="titulo-p2-r"></div>
                    <div className="bloco1-p1-r">
                        <div className="titulo-d-r">Sobre Nós</div>
                        <div className="descricao-r">
                            Somos uma plataforma feita para os amantes do cinema! Só aqui você consegue ter...  
                        </div>

                        <div className="desc-r">
                            <Link to="/sobrenos">
                            Conheça mais sobre nós <img src={Seta} alt="" />
                            </Link>
                        </div>

                        <div className="subtitulos-r">
                            <div className="titulo-p2d-r"><Link to="termosU">Termos de uso</Link></div>
                            <div className="titulo-p2di-r"><Link to="politicap">Declaração de privacidade</Link></div>
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