import Lapis from '../../assets/img/alterar.svg';
import Lixeira from '../../assets/img/lixeira.svg';
import Linha from '../../assets/img/barradeitada.png';
import BarraT from '../../assets/img/barra-tcc.png';
import Att from '../../assets/img/atualizar.svg';
import Sair from '../../assets/img/sair.svg';
import FotoP from '../../assets/img/mdm.jpg';

import BotaoL from '../../componentes/styled/botoes-rosa'
import { Container, Cabecalho, Parteprincipal, Bloco1, Bloco2 } from './styled';


// import { useState } from 'react';




export default function CadastrarFilme() {


  //const [nome, setNome] = useState();
  //const [genero, setGenero] = useState();
  //const [diretor, setDiretor] = useState();
  //const [lancamento, setLancamento] = useState();
  //const [plataforma, setPlataforma] = useState();
  //const [capaMa, setCapaMa] = useState();
  //const [capaMe, setCapaMe] = useState();
  



    return(
        <Container>
          <Cabecalho>
            <div className="usuario">
              <div className="msg-usu">
                <div className="img-1"><img src={FotoP} alt="Foto de perfil" /></div>
                <div class="absolute">3</div>
              </div>
                <div className="texto-1">Olá, <b>Lionel Messi</b></div>
            </div>
            <div className="botoes">
                <button><img src={Att} alt="" /></button>
                <button className="bt"><img src={Sair} alt="" /></button>
            </div>
        </Cabecalho>

        <div className="linha"> <img src={Linha} alt=""/> </div>

            <Parteprincipal>
            <Bloco1>
                <div className="titulo">
                    <div className="barra"><img src={BarraT} alt="" /></div>
                    <div className="texto1">Novo Produto</div>
                </div>

                <div className="inputs">

                    <div className="linha1">
                        <div className="inp1">Nome:   <input type="text"  /></div>
                        <div className="inp">Genêro:   <input type="text" /></div>
                        <div className="inp2">Diretor:   <input type="text"  /></div>
                    </div>

                    <div className="linha-1">
                        <div className="inp3">Data de lançamento:   <input type="text" /></div>
                        <div className="inpuu">Plataformas Dis. :   <input type="text" /></div>
                    </div>

                    <div className="linha1">
                        <div className="inp-d">Capa do Filme(Maior):   <input type="url" /></div>
                    </div>
                    <div className="linha1">
                        <div className="inp-d1">Capa do Filme(Menor):   <input type="url" /></div>
                    </div>

                    <div className="linha-d">
                        <div className="texto">Descrição:</div>
                        <div className="text">  <textarea type="text" /></div>
                    </div>
                    <div className="linha-d1">
                      <div className="sep">
                        <div className="texto">Sinopse:</div>
                        <div className="text">  <textarea type="text" /></div>
                      </div>
                        <div className="btn"><BotaoL>nome="Cadastrar"</BotaoL></div>
                    </div>
                </div>
            </Bloco1>

            <Bloco2>
                <div className="titulo">
                        <div className="barra"><img src={BarraT} alt="" /></div>
                        <div className="texto1">Produtos Cadastrados</div>
                </div>


            <table className ="table-user">
              <thead>
                <tr>
                  <th> Nome </th>
                  <th> Genêro </th>
                  <th> Diretor </th>
                  <th> Lançameto </th>
                  <th> Plataformas </th>
                  <th className="coluna-acao"> </th>
                  <th className="coluna-acao"> </th>
                </tr>
              </thead>
                    
              <tbody>
                  <tr>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td className="coluna-acao"> <button> <img src={Lapis} alt="" /> </button> </td>
                    <td className="coluna-acao"> <button> <img src={Lixeira} alt="" /> </button> </td>
                  </tr> 
              </tbody> 
            </table>


            <table className ="table-user">
              <thead>
                <tr>
                  <th> Capa Menor </th>
                  <th> Capa Maior </th>
                  <th> Descrição  </th>
                  <th> Sinopse  </th>
                  <th className="coluna-acao"> </th>
                  <th className="coluna-acao"> </th>
                </tr>
              </thead>
                    
              <tbody>
                  <tr>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td className="coluna-acao"> <button> <img src={Lapis} alt="" /> </button> </td>
                    <td className="coluna-acao"> <button> <img src={Lixeira} alt="" /> </button> </td>
                  </tr> 
              </tbody> 
            </table>
            </Bloco2>
          </Parteprincipal>
      </Container>
    )
}