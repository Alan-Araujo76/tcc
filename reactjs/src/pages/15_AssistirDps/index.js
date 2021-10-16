import Cabecalho from '../../componentes/comum/cabecalho'
import Rodape from '../../componentes/comum/rodapê'
import TituloC from '../../componentes/comum/titulo'
import Box1 from '../../componentes/comum/box1-fil'
import Box2 from '../../componentes/comum/box2-fil'

import { Container } from './styled.js';


export default function FilmesGostos() {
    return(
        <Container>
            <Cabecalho/>

            <TituloC nome="Assistir mais tarde"/>

            <div className="filmes">
                <Box1 />

                <Box2 />
                <Box2 />
                <Box2 />
            </div>


            <Rodape/>
        </Container>
    )
}