import { Container } from "./styled";

import Estrelas from '../../../assets/img/estrelas.png';
import ExpVin from '../../../assets/img/vin-exp1.jpeg';
import ExpPaul from '../../../assets/img/paul-exp1.jpeg';
import ExpMiche from '../../../assets/img/miche-exp1.jpeg';

export default function(props) {
    return(
        <Container>
            <div className="fundo"> 
                <img src={props.filmes.img_maior} alt="" />
            </div>
            <div class="filme">
                <div class="Nome_do_filme"><b>{props.filmes.nome}</b></div>
                <div class="diretor">
                        <div>{props.filmes.lancamento}</div>
                        <div>Direct by</div>
                        <div>{props.filmes.diretor}</div>
                </div>
            </div>
            
            <div class="faixa-2">
                <div className="geral-f2">
                    <div class="imagen_do_filme"><img src={props.filmes.img_menor} alt="" /></div>
                    <div className="plataformas">
                        <div className="dif-f2">Disponível em:</div>
                        {props.filmes.plataforma}
                    </div>

                    <div class="nota">
                    <div className="dif-f2">Nota geral:</div>
                    <div className="parte-dif">
                        <div class="estrela"><img src={Estrelas} alt="" /></div>
                        <div className="nota-final">• {props.filmes.avaliacao}</div>
                    </div>
                </div>    
                </div>
                
                <div class="box-2">
                <div class="informacao_do_filme">{props.filmes.descricao}
                </div>
                <h2>Sinopse:</h2>
                <div class="sinopse">
                        <div class="sinopse_filme">{props.filmes.sinopse}</div>
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
        </Container>
    )
}