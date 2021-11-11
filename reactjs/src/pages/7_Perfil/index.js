import Contrato from '../../assets/img/contrato.png';
import LinhaSep from '../../assets/img/linha-sep.png';
import LinhaSep1 from '../../assets/img/linha-sep1.png';
import SepFilmes from '../../assets/img/sep-filmes.png';
import Capa from '../../assets/img/capa-filme.png'
import Play from '../../assets/img/play.png'
import UsuSemFoto from '../../assets/img/usu-semfoto.png'

import Estrela from '../../assets/img/estrelas.png'

import Rodape from '../../components/comum/Rodape-Geral';
import Cabecalho from '../../components/comum/Cabecalho-Geral'
import BotaoMais from '../../components/comum/botao-mais';

import { C, Container, Parte1, Parte2 } from './styled'
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Api from '../../service/api';
const api = new Api();

export default function Perfil(props) {
    const [ usu, setUsu ] = useState(props.location.state);
    const [ filme, setFil ] = useState([]);

    async function Listar() {
      const r = api.ListarJP();
      console.log(r);
      setFil(r);
    }


    useEffect(() => {
        Listar();
    });

    return(
      <C>       
        <Cabecalho />
        <Container>
          
            <Parte1>
                <div className="titulo">
                    <div className="txt-t">C o n t a</div>
                    <div className="descricao-t">
                        <div><img src={Contrato} alt="" /></div>
                        <div className="txt-d">Conta criada no ano de...</div>
                    </div>
                </div>

                <div className="linha-sep-p"><img src={LinhaSep} alt="" /></div>

           
            <div className="infos">
                <div className="info-usu">
                    <div className="foto-pessoa">
                      { usu.ds_foto == null
                          ? <img src={UsuSemFoto} alt="" />

                          : <img src={usu.ds_foto} alt="" />
                      }
                    </div>


                    <div className="nm-bt">
                    <div className="txt-usu">{usu.nm_username}</div>
                    <Link to={{ pathname: '/editperfil', state: usu}}>
                        <div className="bt-1"><button>Editar perfil</button></div>
                    </Link>
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
                    <div className="bloco-b">{usu.ds_bio}</div>
                </div>
            
                <div className="linha-sep1"><img src={LinhaSep1} alt="" /></div>
            </Parte1>

            <Parte2>
                <div className="p1">
                    <div className="titulo-p1">Filmes já assistidos</div>

                    {filme.map(item => 
                      <div className="bloco-p1">
                          <div className="sub-bloco">
                            <Link to='meusfilmes'>
                            <div className="capa-p1"><img src={item.img_menor} alt="" /></div>
                            <div className="txt-p1">{item.nome}</div>
                            </Link>
                        </div>
                      </div>
                    )}
                  

                    <div className="sss">
                    <div className="titulo-p1-m">Filmes favoritos</div>
                      <div className="bloco-mobile">
                        <div className="divisao-mobile">
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

                        <div className="divisao-mobile">
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


                      <div className="divisao-mobile">
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
                    </div>

                    <div className="titulo-p1"> Assistir mais tarde</div> 
                    <div className="bloco-p1-d">
                      <div className="bloco-p2">
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="ver-mais">
                            <div className="but-b2"><button><img src={Play} alt="" /></button></div>
                            <div className="txt-b2">Ver mais</div>
                          </div>
                      </div>
                    </div>
                  
                  <div className="sss">
                  <div className="titulo-p1-m"> Assistir mais tarde</div> 
                    <div className="bloco-mobile">
                      <div className="divisao-mobile">
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                      </div>
                      <div className="divisao-mobile">
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                      </div>
                      <div className="divisao-mobile">
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                        <div className="img-b2"><img src={Capa} alt="" /></div>

                        <div className="ver-mais">
                          <div className="but-b2"><button><img src={Play} alt="" /></button></div>
                          <div className="txt-b2">Ver mais</div>
                        </div>
                      </div>
                    </div>
                  </div>

                    <div className="titulo-p1"> Minhas listas</div>
                    <div className="bloco-p2">
                      <div className="ver-mais">
                        <BotaoMais />
                      </div>
                      <div className="lista-b1">
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                      </div>
                      <div className="lista-b1">
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                        <div className="img-b2"><img src={Capa} alt="" /></div>
                      </div>
                      <div className="ver-mais">
                        <div className="but-b2"><button><img src={Play} alt="" /></button></div>
                        <div className="txt-b2">Ver mais</div>
                      </div>
                    </div>

                  <div className="sss">
                  <div className="titulo-p1-m"> Minhas listas</div>
                    <div className="bloco-mobile-d">
                      <div className="divisao-mobile">
                        <div className="ver-mais">
                          <BotaoMais />
                        </div>
                        <div className="lista-b1">
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                        </div>
                      </div>

                      <div className="divisao-mobile-d">
                        <div className="lista-b1">
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                          <div className="img-b2"><img src={Capa} alt="" /></div>
                        </div>
                        <div className="ver-mais">
                          <div className="but-b2"><button><img src={Play} alt="" /></button></div>
                          <div className="txt-b2">Ver mais</div>
                        </div>
                      </div>
                    </div>
                  </div>

                    <div className="titulo-p1-d"> Avaliação </div>
                    <div className="avaliacao-b3">
                        <div className="desc-b3"> Deixa aqui sua avaliação, critícas construtivas, elogios, entre outros. </div> 
                        <div className="inp-bt">
                          <textarea />
                          <div className="estrela"><img src={Estrela} alt="" /></div>
                        </div>
                        <div className="bt-1"><button>Enviar</button></div>
                    </div>
                </div>
            </Parte2>
          <Rodape />
        </Container>
      </C>
    )
}