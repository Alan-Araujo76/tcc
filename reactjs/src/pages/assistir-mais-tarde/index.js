import Mais from '../../assets/img/mais.png';
import Filme from '../../assets/img/capa-filme.png';

import Rodape from '../../componentes/rodapê';
import Cabecalho from '../../componentes/cabecalho';
import Prox from '../../componentes/botao-prox-pag';

import { Container } from './styled';

export default function AssistirMaisTarde() {
    return(
        <Container>
            <Cabecalho/>

            <div className="titulo">Melhores do ano:</div>

            <div className="parte1">
                <div className="desc">Descrição:</div>
                <div className="desc-desc">Recomendados por amigos do coração</div>
            </div>

            <div className="parte2">
                <div className="linha">
                    <div className="bloco">
                        <button className="botao"><img src={Mais} alt=""/></button>
                        <div className="desc-botao">Adicionar filme</div>
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
            
            <Rodape/>
        </Container>
    )
}