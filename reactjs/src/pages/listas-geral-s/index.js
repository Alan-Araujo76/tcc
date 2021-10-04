import Cabecalho from '../../componentes/comum/cabecalho'
import Rodape from '../../componentes/comum/rodapê'
import ProxPag from '../../componentes/comum/botao-prox-pag'
import Box1 from '../../componentes/comum/box1-lis'
import Box2 from '../../componentes/comum/box2-lis'

import LinhaSep from '../../assets/img/linhasep-listass.png';

import { Link } from 'react-router-dom';
import {Container } from './styled.js';

export default function FilmesGostos() {
    return(
        <Container>
            <Cabecalho/>
                <div className="titulo">Minhas listas:</div>


                <div className="tipos">
                    <div className="box1">
                        <div className="txt"><Link to="/listasgc">Listas criadas</Link></div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </div>
                    <div className="box">
                        <div className="txt"><Link to="/listasgs">Listas salvas</Link></div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </div>
                </div>

                <div className="filmes">
                    <Box1 />

                    <Box2 />
                    <Box2 />
                    <Box2 />
                </div>

                <ProxPag />
            <Rodape/>
        </Container>
    )
}