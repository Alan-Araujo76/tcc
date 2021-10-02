import Cabecalho from '../../componentes/comum/cabecalho'
import Rodape from '../../componentes/comum/rodapê'
import Capa from '../../assets/img/capa-filme.png'

import ProxPag from '../../componentes/comum/botao-prox-pag'

import {Container, Bloco1, Bloco2} from './styled.js';

export default function FilmesGostos() {
    return(
        <Container>
            <Cabecalho/>

            <div className="titulo">Filmes por gosto</div>

            <div className="filmes">
                <Bloco1>

                    <div className="filme">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme-d">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme-d">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme-d">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>
                </Bloco1>

                <Bloco2>

                <div className="filme">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme-d">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme-d">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9</div>
                    </div>

                    <div className="filme-d">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="nome">Velozes e Furiosos 9 </div>
                    </div>
                </Bloco2>
            </div>

            <ProxPag />


            <Rodape/>
        </Container>
    )
}