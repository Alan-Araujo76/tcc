
import Estrelas from '../../assets/img/estrelas.png';
import LinhaSep from '../../assets/img/linha-det-fil.png';
import Coracao from '../../assets/img/coracao.png';
import Relogio from '../../assets/img/relogio.png';
import LinhaBox from '../../assets/img/linha-box.png';
import Olho from '../../assets/img/image-removebg-preview.png';

import Rodape from '../../components/comum/Rodape-Geral';
import Com from '../../components/comum/Conte-Comment';
import ExpVin from '../../assets/img/vin-exp1.jpeg';
import ExpPaul from '../../assets/img/paul-exp1.jpeg';
import ExpMiche from '../../assets/img/miche-exp1.jpeg';
import Cabecalho from '../../components/comum/Cabecalho-Geral';
import { Container, ContainerC } from './styled';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Api from '../../service/api';
const api = new Api();

export default function DetalhesFilme(props) {
    const [ filmes, setFilmes ] = useState(props.location.state);
    console.log(filmes);

    return(

        <Container>
            
            <ContainerC>
                <div classNameName="fundo">
                <Cabecalho/> 
                    
                    <img src={filmes.img_maior} alt="" style={{width: "100%", height: "90vh"}}/>

                <div className="filme">
                    <div className="Nome_do_filme"><b>{filmes.nome}</b></div>
                    <div className="diretor">
                            <div>{filmes.lancamento}</div>
                            <div>Direct by</div>
                            <div>{filmes.diretor}</div>
                    </div>
                </div>
                </div>
                
                <div className="faixa-2">
                    <div classNameName="geral-f2">
                        <div className="imagen_do_filme"><img src={filmes.img_menor} alt="" /></div>
                        <div classNameName="plataformas">
                            <div classNameName="dif-f2">Disponível em:</div>
                            {filmes.plataforma}
                        </div>

                        <div className="nota">
                        <div classNameName="dif-f2">Nota geral:</div>
                        <div className="parte-dif">
                            <div className="estrela"><img src={Estrelas} alt="" /></div>
                            <div className="nota-final">• {filmes.avaliacao}</div>
                        </div>
                    </div>    
                    </div>
                    
                    <div className="box-2">
                    <div className="informacao_do_filme">{filmes.descricao}
                    </div>
                    <h2>Sinopse:</h2>
                    <div className="sinopse">
                            <div className="sinopse_filme">{filmes.sinopse}</div>
                    </div>
                    </div>
                
                    <div className="box">
                        <h2>Principais atores:</h2>
                        <div className="principais_atores">
                            <div classNameName="sep">
                                <img src={ExpVin} alt="" />
                                <div>guigh</div>
                            </div>
        
                        </div>
                    </div>
                </div> 
            </ContainerC>

            <div class="critica">
                <div className="p1">
                    <div className="bloco-p1">
                        <div className="titulo">CRÍTICAS POPULARES ESTA SEMANA</div>
                        <div className="barra"><img src={LinhaSep} alt="" /></div>
                    </div>


                    <div className="bloco-p2">
                        <Com />
                    </div>
                    <div className="verm-c"><button><Link to="comentario">Ver mais comentarios</Link></button></div>
                </div>


                <div className="p2">
                    <div className="bloco">
                        <div className="parte1-p2">
                            <div className="p1-g">
                                <div className="img-p2-d"><img src={Olho}/></div>
                                <div className="txt-p2">ASSISTIDO</div>
                            </div>

                            <div className="p1-g">
                                <div className="img-p2-d"><img src={Coracao} alt=""/></div>
                                <div className="txt-p2">AMEI</div>
                            </div>

                            <div className="p1-g">
                                <div className="img-p2-di"><img src={Relogio} alt=""/></div>
                                <div className="txt-p2">ASSISTIR DEPOIS</div>
                            </div>
                        </div>

                        <div className="barra-p2"><img src={LinhaBox} alt="" /></div>

                        <div className="parte2-p2">
                            <div className="txt-p2-d">DEIXE SUA AVALIAÇÃO:</div>
                            <div className="img-p2-e"><img src={Estrelas} alt="" /></div>
                        </div>

                        <div className="barra-p2"><img src={LinhaBox} alt="" /></div>

                        <div className="parte3-p2">
                            <div className="txt-p2-n">ADICIONAR Á UMA LISTA</div>
                        </div>

                        <div className="barra-p2"><img src={LinhaBox} alt="" /></div>

                        <div className="parte4-p2">
                            <button className="txt-p2-n">COMENTAR</button>
                        </div>
                    </div>
                </div>
            </div>


                
            <Rodape />
        </Container>
    )
}