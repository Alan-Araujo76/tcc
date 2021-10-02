import Cabecalho from '../../componentes/comum/cabecalho'
import Rodape from '../../componentes/comum/rodapê'
import ProxPag from '../../componentes/comum/botao-prox-pag'
import Box1 from '../../componentes/comum/box1-lis'
import Box2 from '../../componentes/comum/box2-lis'

import {Container } from './styled.js';

export default function FilmesGostos() {
    return(
        <Container>
            <Cabecalho/>
                <div className="titulo">Minhas listas:</div>

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