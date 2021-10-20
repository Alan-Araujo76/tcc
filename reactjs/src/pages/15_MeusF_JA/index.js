import Cabecalho from '../../componentes/comum/cabecalho'
import Rodape from '../../componentes/comum/rodapê'
import ProxPag from '../../componentes/comum/botao-prox-pag'
import TituloC from '../../componentes/comum/titulo'
import Filmes from '../../componentes/comum/box-fil';

import LinhaSep from '../../assets/img/linhasep-listass.png';
import { Link } from 'react-router-dom';

import { Container } from './styled.js';

import { useState, useEffect } from 'react'
import Api from '../../1_service/api';
const api = new Api();

export default function FilmesGostos() {
    const [filme, setFilme] = useState([]);

    async function Listar() {
        let r = await api.ListarFG();
        setFilme(r);
    }

    useEffect(() => {
        Listar();
      }, []);

    return(
        <Container>
            <Cabecalho/>

            <TituloC nome="Meus Filmes"/>

            <div className="tipos">
                <div className="box1"><Link to="/meusfilmes">
                    <div className="txt">Já assistidos</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>
                
                <div className="box"><Link to="/assistimtarde">
                    <div className="txt">Assistir mais tarde</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>

                <div className="box"><Link to="/filmesporgosto">
                    <div className="txt">Por gosto</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>
            </div>

            <div className="filmes">
                {filme.map(item => 
                    <Filmes 
                    key={item.id}
                    info={item} />
                )}
            </div>

            <ProxPag />


            <Rodape/>
        </Container>
    )
}