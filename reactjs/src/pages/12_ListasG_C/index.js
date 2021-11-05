import Cabecalho from '../../components/comum/Cabecalho-Geral'
import Rodape from '../../components/comum/Rodape-Geral'
import ProxPag from '../../components/comum/ProxPag-Button'
import Box1 from '../../components/comum/box1-lis'

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

                </div>

                <ProxPag />
            <Rodape/>
        </Container>
    )
}