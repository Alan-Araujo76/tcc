
import Estrelas from '../../assets/img/estrelas.png';
import LinhaSep from '../../assets/img/linha-det-fil.png';
import Coracao from '../../assets/img/coracao.png';
import Relogio from '../../assets/img/relogio.png';
import LinhaBox from '../../assets/img/linha-box.png';

import Rodape from '../../components/comum/rodapê';
import Com from '../../components/comum/comentario';

import { Container } from './styled';
import Conteudo from './conteudo';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Api from '../../1_service/api';
const api = new Api();

export default function DetalhesFilme() {
    const [filme, setFilme] = useState([]);

    async function Listar() {
        let r = await api.ListarF();
        console.log(r);
        setFilme(r);
    }

    useEffect(() => {
        Listar();
    }, []);

    return(

        <Container>
        
            {filme.map(item => 
                <Conteudo 
                    key={item.id}
                    filmes={item} 
                />   
            )}

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