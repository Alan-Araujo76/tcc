import Cabecalho from '../../componentes/cabecalho'
import Rodape from '../../componentes/rodapê'
import Capa from '../../assets/img/capa-filme.png'


import {Container, Bloco1, Bloco2} from './styled.js';

export default function FilmesGostos() {
    return(
        <Container>
            <Cabecalho/>

            <div className="titulo">Filmes por gosto:</div>

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
                        <div className="nome">Velozes e Furiosos 9 </div>
                    </div>
                </Bloco2>
            </div>

            <div className="prox-pag">
                <div className="botao"><button>1</button></div>
                <div className="botao"><button>2</button></div>
                <div className="botao"><button>3</button></div>
                <div className="botao"><button>...</button></div>
            </div>


            <Rodape/>
        </Container>
    )
}