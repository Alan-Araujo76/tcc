import Mais from '../../assets/img/mais.png';
import Filme from '../../assets/img/capa-filme.png';
import Prox from '../../components/comum/botao-prox-pag';
import Cabecalho from '../../components/comum/cabecalho';
import Rodape from '../../components/comum/rodapê';

import { Link } from 'react-router-dom';

import { Container } from './styled';

export default function FilmeLista() {
    return(
    <div style={{display: "flex", flexDirection: "column", backgroundColor: "#000"}}>
        <Cabecalho />
            <Container>
            <b className="titulo">Melhores do ano:</b>

            <div className="parte1">
                <div className="desc">DESCRIÇÃO:</div>
                <div className="desc-desc">Os que eu mais gostei durante 2021</div>
            </div>

            <div className="parte2">
                <div className="linha">
                    <div className="bloco-botao">
                        <Link to="/criarlist">
                            <div className="botao"><button><img src={Mais} alt=""/></button></div>
                            <div className="desc-botao">ADICIONAR FILME</div>
                        </Link>
                    </div>
                    <div className="bloco">
                        <div className="img-filme"><img src={Filme} alt=""/></div>
                        <div className="nm-filme">Velozes e Furiosos 9</div>
                    </div>
                    <div className="bloco">
                        <div className="img-filme"><img src={Filme} alt=""/></div>
                        <div className="nm-filme">Velozes e Furiosos 9</div>
                    </div>
                </div>
                <Prox/>
            </div>
            </Container>          
        <Rodape />
    </div>
    )
}