import Cabecalho from '../../componentes/comum/cabecalho'
import Rodape from '../../componentes/comum/rodapê'
import ProxPag from '../../componentes/comum/botao-prox-pag'
import TituloC from '../../componentes/comum/titulo'
import Box1 from '../../componentes/comum/box1-fil'
import Box2 from '../../componentes/comum/box2-fil'
import LinhaSep from '../../assets/img/linhasep-listass.png';

import { Link } from 'react-router-dom';
import { Container } from './styled.js';

export default function FilmesGostos() {
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
            </div>

            <div className="filmes">
                <Box1 />

                <Box2 />
                <Box2 />
                <Box2 />
                <ProxPag />
            </div>
            


            <Rodape/>
        </Container>
    )
}