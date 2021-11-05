import Cabecalho from '../../components/comum/Cabecalho-Geral'
import Rodape from '../../components/comum/Rodape-Geral'
import Capa from '../../assets/img/capa-filme.png'
import ProxPag from '../../components/comum/ProxPag-Button'
import Box2 from '../../components/comum/box2-lis'

import { Container, Bloco1 } from './styled.js';

export default function FilmesGostos() {
    return(
        <Container>
            <Cabecalho/>

            <div className="titulo">Listas populares:</div>

            <div className="filmes">
                <Bloco1>
                    <div className="filme">
                        <div className="img-fil">
                            <div className="img"><img src={Capa} alt="" /></div>
                            <div className="img"><img src={Capa} alt="" /></div>
                            <div className="img"><img src={Capa} alt="" /></div>
                        </div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme">
                        <div className="img-fil">
                            <div className="img"><img src={Capa} alt="" /></div>
                            <div className="img"><img src={Capa} alt="" /></div>
                            <div className="img"><img src={Capa} alt="" /></div>
                        </div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme">
                        <div className="img-fil">
                            <div className="img"><img src={Capa} alt="" /></div>
                            <div className="img"><img src={Capa} alt="" /></div>
                            <div className="img"><img src={Capa} alt="" /></div>
                        </div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>
                </Bloco1>

                <Box2 />
                <Box2 />
                <Box2 />

                <ProxPag />
            </div>


            <Rodape/>
        </Container>
    )
}