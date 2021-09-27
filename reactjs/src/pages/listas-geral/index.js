import Cabecalho from '../../componentes/cabecalho'
import Rodape from '../../componentes/rodapê'
import Capa from '../../assets/img/capa-filme.png'


import ProxPag from '../../componentes/botao-prox-pag'
import Mais from '../../assets/img/mais.png'

import {Container, Bloco1, Bloco2} from './styled.js';

export default function FilmesGostos() {
    return(
        <Container>
            <Cabecalho/>

            <div className="titulo">Minhas listas:</div>

            <div className="filmes">
                <Bloco1>
                    <div className="filme-b">
                        <div className="botao"><button><img src={Mais} alt=""/></button></div>
                        <div className="desc-botao"> CRIAR LISTA</div>
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

                <Bloco2>

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
                </Bloco2>


                <Bloco2>

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
                </Bloco2>



                <Bloco2>

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
                </Bloco2>

                <ProxPag />
            </div>


            <Rodape/>
        </Container>
    )
}