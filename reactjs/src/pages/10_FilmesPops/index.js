import Cabecalho from '../../componentes/comum/cabecalho'
import Rodape from '../../componentes/comum/rodapê'
import ProxPag from '../../componentes/comum/botao-prox-pag'
import TituloC from '../../componentes/comum/titulo'
import Box1 from '../../componentes/comum/box1-fil'
import Box2 from '../../componentes/comum/box2-fil'

import { Container } from './styled.js';

export default function FilmesGostos() {
    return(
        <Container>
            <Cabecalho/>

            <TituloC nome="Filmes populares"/>

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