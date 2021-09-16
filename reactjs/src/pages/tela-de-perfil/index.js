import Contrato from '../../assets/img/contrato.png';
import LinhaSep from '../../assets/img/linha-sep.png';
import LinhaSep1 from '../../assets/img/linha-sep1.png';
import SepFilmes from '../../assets/img/sep-filmes.png';
import FotoUsu from '../../assets/img/foto.png'
import Capa from '../../assets/img/capa-filme.png'

import Cabecalho from '../../componentes/cabecalho'

import { Container, Parte1, Parte2 } from './styled'

export default function Perfil() {
    return(
        <Container>
            <Cabecalho />

            <Parte1>
                <div className="titulo">
                    <div className="txt-t">C o n t a</div>
                    <div className="descricao-t">
                        <div><img src={Contrato} alt="" /></div>
                        <div className="txt-d">Conta criada no ano de...</div>
                    </div>
                </div>

                <div className="linha-sep"><img src={LinhaSep} alt="" /></div>
                
            <div className="infos">
                <div className="info-usu">
                    <div className="foto-pessoa"><img src={FotoUsu} alt="" /></div>
                    <div className="nm-bt">
                    <div className="txt-usu">Nome Usuário</div>
                        <div className="bt-1"><button>Editar perfil</button></div>
                    </div>
                </div>
                    <div className="info-fil">
                        <div className="txt-fil">
                            <div className="qtd-fil">0</div>
                            <div className="categoria">Filmes Assitidos</div>
                        </div>
                        <div className="img-fil"><img src={SepFilmes} alt="" /></div>

                        <div className="txt-fil"> 
                            <div className="qtd-fil"> 0 </div>
                            <div className="categoria">Listas</div>
                        </div>
                        <div className="img-fil"><img src={SepFilmes} alt="" /></div>

                        <div className="txt-fil">
                            <div className="qtd-fil">0</div>
                            <div className="categoria">Assitir <br></br>Mais tarde</div>
                        </div>
                        <div className="img-fil"><img src={SepFilmes} alt="" /></div>
                    </div>
                </div>

                <div className="bio">
                    <div className="titulo-b">Bio:</div>
                    <div className="bloco-b"></div>
                </div>
                <div className="linha-sep1"><img src={LinhaSep1} alt="" /></div>
            </Parte1>

            <Parte2>
                <div className="p1">
                    <div className="titulo-p1">Filmes favoritos</div>
                    <div className="bloco-p1">
                      <div className="sub-bloco">
                        <div className="capa-p1"><img src={Capa} alt="" /></div>
                        <div className="txt-p1">Velozes e Furiosos</div>
                      </div>

                      <div className="sub-bloco">
                        <div className="capa-p1"><img src={Capa} alt="" /></div>
                        <div className="txt-p1">Velozes e Furiosos</div>
                      </div>

                      <div className="sub-bloco">
                        <div className="capa-p1"><img src={Capa} alt="" /></div>
                        <div className="txt-p1">Velozes e Furiosos</div>
                      </div>

                      <div className="sub-bloco">
                        <div className="capa-p1"><img src={Capa} alt="" /></div>
                        <div className="txt-p1">Velozes e Furiosos</div>
                      </div>

                      <div className="sub-bloco">
                        <div className="capa-p1"><img src={Capa} alt="" /></div>
                        <div className="txt-p1">Velozes e Furiosos</div>
                      </div>

                      <div className="sub-bloco">
                        <div className="capa-p1"><img src={Capa} alt="" /></div>
                        <div className="txt-p1">Velozes e Furiosos</div>
                      </div>

                      <div className="sub-bloco">
                        <div className="capa-p1"><img src={Capa} alt="" /></div>
                        <div className="txt-p1">Velozes e Furiosos</div>
                      </div>

                      <div className="sub-bloco">
                        <div className="capa-p1"><img src={Capa} alt="" /></div>
                        <div className="txt-p1">Velozes e Furiosos</div>
                      </div>
                    </div>
                </div>
            </Parte2>
        </Container>
    )
}