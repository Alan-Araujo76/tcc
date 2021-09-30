import { Container } from './styled';
import capaMaior from '../../assets/img/capa-maior.jpeg';
import capaFilme from '../../assets/img/capa-filme.png';
import play from '../../assets/img/play.png';


import Cabecalho from '../../componentes/cabecalho';
import Rodape from '../../componentes/rodapê';

import ComentariosTi from './comentario-box-ti/index';
import ListaTi from './listas-box-ti/index';

export default function TelaInicial(){
    return(
        
        <Container>
            <Cabecalho/>
            <div className="conteiner-ti">
                <img src={capaMaior} alt="" />
                <div className="titulo-ti">Acompanhe tudo sobre filmes</div>
                <div className="subTitulo-ti">A rede social para amantes de cinema</div>
                <div className="conteudo-box-ti">
                    <div className="titulo-box-ti">Filmes populares:</div>
                    <div className="box-filmes-ti">
                        <div className="boxPT1-ti">
                            <div className="filme-ti">
                                <img src={capaFilme} alt="" />
                            </div>
                            <div className="filme-ti">
                                <img src={capaFilme} alt="" />
                            </div>
                            <div className="filme-ti">
                                <img src={capaFilme} alt="" /> 
                            </div>
                            <div className="filme-ti">
                                <img src={capaFilme} alt="" />
                            </div>
                            <div className="filme-ti">
                                <img src={capaFilme} alt="" />
                            </div>
                        </div>
                        <div className="boxPT2-ti">
                            <div className="filme-ti">
                                <img src={capaFilme} alt="" />

                            </div>
                            <div className="filme-ti">
                                <img src={capaFilme} alt="" />
                            </div>
                            <div className="filme-ti">
                                <img src={capaFilme} alt="" />
                            </div>
                            <div className="filme1-ti">
                                <img src={capaFilme} alt="" />
                            </div>
                            <div className="botao-ti">
                                <button className="botao2-ti"><img src={play} alt=""/></button>
                                <div>
                                    ver mais
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="conteudo-cl-ti">
                    <div className="comentarios-ti">
                        <div className="titulo-cl-ti">
                            CRÍTICAS POPULARES ESTA SEMANA
                        </div>
                        <hr/>
                        <ComentariosTi/>
                        <ComentariosTi/>
                        <ComentariosTi/>
                    </div>
                    <div className="listas-ti">
                        <div className="titulo-l-ti">
                            LISTAS POPULARES
                        </div>
                        <hr/>
                        <div className="listas-box-ti">
                            <ListaTi/>
                            <hr/>
                            <ListaTi/>
                            <hr/>
                            <ListaTi/>
                            <button><div>ver todas as listas</div></button>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape/>
        </Container>
        
    )
}
