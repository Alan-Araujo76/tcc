import { Container } from './styled';
import capaMaior from '../../assets/img/capa-maior.jpeg';
import capaFilme from '../../assets/img/capa-filme.png';
import play from '../../assets/img/play.png';
import perfilFoto from '../../assets/img/mdm.jpg';
import coracao from '../../assets/img/coracao.png';
import perfil from '../../assets/img/foto.png';
import Cabecalho from '../../componentes/cabecalho';
import Rodape from '../../componentes/rodapê';


export default function TelaInicial(){
    return(
        
        <Container>
            <div className="conteiner-ti">
            <Cabecalho/>
            <img src={capaMaior} width="1300em" height="600em"/>
        
            <div className="titulo-ti">Acompanhe tudo sobre filmes</div>
            <div className="subTitulo-ti">A rede social para amantes de cinema</div>
            <div className="conteudo-box-ti">
                <div className="titulo-box-ti">Filmes populares:</div>
                <div className="box-filmes-ti">
                    <div className="boxPT1-ti">
                        <div className="filme-ti">
                            <img src={capaFilme} />
                        </div>
                        <div className="filme-ti">
                            <img src={capaFilme} />
                        </div>
                        <div className="filme-ti">
                            <img src={capaFilme} /> 
                        </div>
                        <div className="filme-ti">
                            <img src={capaFilme}/>
                        </div>
                        <div className="filme-ti">
                            <img src={capaFilme}/>
                        </div>
                    </div>
                    <div className="boxPT2-ti">
                        <div className="filme-ti">
                            <img src={capaFilme}/>
                        </div>
                        <div className="filme-ti">
                            <img src={capaFilme}/>
                        </div>
                        <div className="filme-ti">
                            <img src={capaFilme}/>
                        </div>
                        <div className="filme1-ti">
                            <img src={capaFilme}/>
                        </div>
                        <div className="botao-ti">
                            <button className="botao2-ti"><img src={play}/></button>
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
                    <div className="box-comentario">
                        
                        <img src={perfilFoto} width="35" height="53"/>
                        <div>
                            <div className="nome-cl-ti">  
                                Gabriel Melo 
                            </div>
                            <div className="comentarioTXT-ti">
                                Há muita coisa acontecendo para este tempo de execução e os setpieces são um pouco desanimadores em comparação com as entradas anteriores. Eles poderiam ter pelo menos, feito com que John Cena vencesse aquele grandalhão no final.
                            </div>
                            <div className="sobre-coracao-ti">
                                <div className="sobre-ti">
                                    Sobre: 
                                </div>
                                <div className="coracao-ti">
                                    <img src={coracao} width="43" height="33"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-comentario">
                        <img src={perfilFoto} width="35" height="53"/>
                        <div>
                            <div className="nome-cl-ti">  
                                Gabriel Melo 
                            </div>
                            <div className="comentarioTXT-ti">
                                Há muita coisa acontecendo para este tempo de execução e os setpieces são um pouco desanimadores em comparação com as entradas anteriores. Eles poderiam ter pelo menos, feito com que John Cena vencesse aquele grandalhão no final.
                            </div>
                            <div className="sobre-coracao-ti">
                                <div className="sobre-ti">
                                    Sobre: 
                                </div>
                                <div className="coracao-ti">
                                    <img src={coracao} width="43" height="33"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-comentario">
                        <img src={perfilFoto} width="35" height="53"/>
                        <div>
                            <div className="nome-cl-ti">  
                                Gabriel Melo 
                            </div>
                            <div className="comentarioTXT-ti">
                                Há muita coisa acontecendo para este tempo de execução e os setpieces são um pouco desanimadores em comparação com as entradas anteriores. Eles poderiam ter pelo menos, feito com que John Cena vencesse aquele grandalhão no final.
                            </div>
                            <div className="sobre-coracao-ti">
                                <div className="sobre-ti">
                                    Sobre: 
                                </div>
                                <div className="coracao-ti">
                                    <img src={coracao} width="43" height="33"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listas-ti">
                    <div className="titulo-l-ti">
                        LISTAS POPULARES
                    </div>
                    <hr/>
                    <div className="listas-box-ti">
                        <div className="box-lista-ti">
                            <div className="lista-filmes-ti">
                                <img src={capaFilme}/>
                                <img src={capaFilme}/>
                                <img src={capaFilme}/>
                                <img src={capaFilme}/>
                            </div>
                            <div className="nome-lista-ti">
                                <img src={perfil}/>
                                <div>filmes legais</div> 
                            </div>
                            <hr/>
                        </div>
                        <div className="box-lista-ti">
                            <div className="lista-filmes-ti">
                                <img src={capaFilme}/>
                                <img src={capaFilme}/>
                                <img src={capaFilme}/>
                                <img src={capaFilme}/>
                            </div>
                            <div className="nome-lista-ti">
                                <img src={perfil}/>
                                <div>filmes legais</div> 
                            </div>
                            <hr/>
                        </div>
                        <div className="box-lista-ti">
                            <div className="lista-filmes-ti">
                                <img src={capaFilme}/>
                                <img src={capaFilme}/>
                                <img src={capaFilme}/>
                                <img src={capaFilme}/>
                            </div>
                            <div className="nome-lista-ti">
                                <img src={perfil}/>
                                <div>filmes legais</div> 
                            </div>
                        </div>
                        <button><div>ver todas as listas</div></button>
                    </div>
                </div>
            </div>
            </div>
            <Rodape/>
        </Container>
        
    )
}