import Mais from '../../assets/img/mais.png';
import Filme from '../../assets/img/capa-filme.png';
import Prox from '../../components/comum/ProxPag-Button';
import Cabecalho from '../../components/comum/Cabecalho-Geral';
import Rodape from '../../components/comum/Rodape-Geral';

import { Link } from 'react-router-dom';

import { Container } from './styled';
import { useState } from 'react';

export default function FilmeLista(props) {
    const [flista,setFlista] = useState(props.location.state);
    console.log(flista);

    return(
    <div style={{display: "flex", flexDirection: "column", backgroundColor: "#000"}}>
        <Cabecalho/>
            <Container>
            <b className="titulo">{flista.nm_lista}</b>

            <div className="parte1">
                <div className="desc">DESCRIÇÃO:</div>
                <div className="desc-desc">{flista.ds_descricao}</div>
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
                        <div className="img-filme"><img src={flista.infob_mw_tblistaitems[0].id_filme_infob_mw_filme.img_capa_menor} alt=""/></div>
                        <div className="nm-filme">{flista.infob_mw_tblistaitems[0].id_filme_infob_mw_filme.nm_filme}</div>
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