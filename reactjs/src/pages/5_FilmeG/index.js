
import Estrelas from '../../assets/img/estrelas.png';
import CapaMenor from '../../assets/img/capa-menor.jpeg';
import ExpVin from '../../assets/img/vin-exp1.jpeg';
import ExpPaul from '../../assets/img/paul-exp1.jpeg';
import ExpMiche from '../../assets/img/miche-exp1.jpeg';
import LinhaSep from '../../assets/img/linha-det-fil.png';
import Coracao from '../../assets/img/coracao.png';
import Relogio from '../../assets/img/relogio.png';
import LinhaBox from '../../assets/img/linha-box.png';

import Cabecalho from '../../components/comum/cabecalho';
import Rodape from '../../components/comum/rodapê';
import Com from '../../components/comum/comentario';

import { Container } from './styled';
import { Link } from 'react-router-dom';

export default function DetalhesFilme() {
    return(

        <Container>
        
        <div className="back">
            <Cabecalho />

        <div class="filme">
            <div class="Nome_do_filme"><b>Velozes e Furiosos 9</b></div>
            <div class="diretor">
                    <div>2021</div>
                    <div>Direct by</div>
                    <div>Justin Lin</div>
            </div>
        </div> 
        </div>
            
        <div class="faixa-2">
            <div className="geral-f2">
                <div class="imagen_do_filme"><img src={CapaMenor} alt="" /></div>
                <div className="plataformas">
                    <div className="dif-f2">Disponível em:</div>
                    Amazon Prime, Netflix, Telecine, HboMax, CineMax e Torrent.
                    </div>
            </div>
            
            <div class="box-2">
            <div class="informacao_do_filme"><div>A JUSTIÇA ESTÁ CHEGANDO.</div>
                    Dominic Toretto e sua equipe lutam contra o
                    assassino mais habilidoso e o motorista de alto
                    desempenho que já encontraram: seu irmão
                    abandonado.
            </div>
            <h2>Sinopse:</h2>
            <div class="sinopse">
                    <div class="sinopse_filme">Em Velozes & Furiosos 9, Dominic Toretto (Vin Diesel) e Letty (Michelle Rodriguez) vivem uma vida pacata ao lado de seu filho Brian. Mas eles logo são ameaçados quando o irmão desaparecido de Dom retorna. Jakob (John Cena), um assassino habilidoso e excelente motorista, está trabalhando ao lado de Cipher (Charlize Theron), vilã de Velozes & Furiosos 8. Para enfrentá-los, Toretto vai precisar reunir sua equipe novamente, inclusive Han (Sung Kang), que todos acreditavam estar morto.</div>
            </div>

            <div class="nota">
                <div className="txt">Nota geral:</div>
                <div className="parte-dif">
                    <div class="estrela"><img src={Estrelas} alt="" /></div>
                    <div className="nota-final">• 5.0</div>
                </div>
            </div>            

            </div>
           
            <div class="box">
                <h2>Principais atores:</h2>
                <div class="principais_atores">
                    <div className="sep">
                        <img src={ExpVin} alt="" />
                        <div>Vin Diesel</div>
                    </div>
                    <div className="sep">
                        <img src={ExpPaul} alt="" />
                        <div>Paul Walker</div>
                    </div>
                    <div className="sep">
                        <img src={ExpMiche} alt="" />
                        <div>Michelle Rodriguez</div>
                    </div>
                </div>

                <div class="principais_atores">
                    <div className="sep">
                        <img src={ExpVin} alt="" />
                        <div>Vin Diesel</div>
                    </div>
                    <div className="sep">
                        <img src={ExpPaul} alt="" />
                        <div>Paul Walker</div>
                    </div>
                    <div className="sep">
                        <img src={ExpMiche} alt="" />
                        <div>Michelle Rodriguez</div>
                    </div>
                </div>

            </div>
          </div> 

            <div class="critica">
                <div className="p1">
                    <div className="bloco-p1">
                        <div className="titulo">CRÍTICAS POPULARES ESTA SEMANA</div>
                        <div className="barra"><img src={LinhaSep} alt="" /></div>
                    </div>


                    <div className="bloco-p2">
                        <Com />
                        <Com />
                        <Com />
                    </div>
                    <div className="verm-c"><button><Link to="comentario">Ver mais comentarios</Link></button></div>
                </div>


                <div className="p2">
                    <div className="bloco">
                        <div className="parte1-p2">
                            <div className="p1-g">
                                <div className="img-p2"></div>
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
                            <div className="txt-p2-n">COMENTAR</div>
                        </div>

                    </div>
                </div>
            </div>


                
            <Rodape />
        </Container>
    )
}