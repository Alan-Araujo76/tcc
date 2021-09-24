import Mais from '../../assets/img/mais.png';
import Filme from '../../assets/img/capa-filme.png';

import Rodape from '../../componentes/rodapê';
import Cabecalho from '../../componentes/cabecalho';
import Prox from '../../componentes/botao-prox-pag';

import { Container } from './styled';

export default function FilmeLista() {
    return(
        <Container>

            <b className="titulo">Melhores do ano:</b>

            <div className="parte1">
                <div className="desc">DESCRIÇÃO:</div>
                <div className="desc-desc">Recomendados por amigos do coração</div>
            </div>

            <div className="parte2">
                <div className="linha">
                    <div className="bloco">
                        <div className="botao"><button><img src={Mais} alt=""/></button></div>
                        <div className="desc-botao">ADICIONAR FILME</div>
                    </div>
                    <div className="bloco">
                        <div className="img-filme"><img src={Filme} alt=""/></div>
                        <div className="nm-filme">Velozes e Furiosos 9</div>
                    </div>
                    <div className="bloco">
                        <div className="img-filme"><img src={Filme} alt=""/></div>
                        <div className="nm-filme">Velozes e Furiosos 9</div>
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
                <div className="linha">
                    <div className="bloco">
                    <div className="img-filme"><img src={Filme} alt=""/></div>
                        <div className="desc-botao">ADICIONAR FILME</div>
                    </div>
                    <div className="bloco">
                        <div className="img-filme"><img src={Filme} alt=""/></div>
                        <div className="nm-filme">Velozes e Furiosos 9</div>
                    </div>
                    <div className="bloco">
                        <div className="img-filme"><img src={Filme} alt=""/></div>
                        <div className="nm-filme">Velozes e Furiosos 9</div>
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
    )
}