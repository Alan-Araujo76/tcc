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
                        <Link to="/listasgc">
                            <div className="txt">Listas criadas</div>
                            <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/listasgs">
                            <div className="txt">Listas salvas</div>
                            <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                        </Link>
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