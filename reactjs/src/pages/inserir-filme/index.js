import Lapis from '../../assets/img/alterar.svg';
import Lixeira from '../../assets/img/lixeira.svg';
import Linha from '../../assets/img/barradeitada.png';
import BarraT from '../../assets/img/barra-tcc.png';
import Att from '../../assets/img/atualizar.svg';
import Sair from '../../assets/img/sair.svg';
import FotoP from '../../assets/img/mdm.jpg';

import BotaoL from '../../componentes/styled/botoes-rosa'
import { Container, Cabecalho, Parteprincipal, Bloco1, Bloco2 } from './styled';

import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../service/api';
const api = new Api();


export default function CadastrarFilme() {
  const [filme, setFilme] = useState([]);
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [descricao, setDescricao] = useState('');
  const [diretor, setDiretor] = useState('');
  const [lancamento, setLancamento] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [avaliacao, setAvalicao] = useState('');
  const [img_maior, setimg_maior] = useState('');
  const [img_menor, setimg_menor] = useState('');
  const [idAlterando, setIdAlterando] = useState(0);

  async function Listar() {
    let r = await api.ListarF();
    setFilme(r);
  }

  async function Inserir() {
    if(idAlterando === 0) {
      let r = await api.InserirF(nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor);
      
      if(r.erro) {
          toast.error(`${r.erro}`);
          return;
      } else {
          toast.dark('💕 Produto cadastrado com sucesso!');
        }
    } else {
      let r = await api.Alterar(idAlterando, nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor);

      if(r.erro) {
        toast.error(`${r.erro}`);
        return;
      } else {
        toast.dark('✏️ Produto alterado!');
      }
    }

    Listar();
  }


    return(
        <Container>
          <ToastContainer />
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
                        <div className="inp1">Nome:   <input type="text"  onChange={e => setNome(e.target.value)} /></div>
                        <div className="inp">Genêro:   <input type="text" onChange={e => setGenero(e.target.value)}/></div>
                        <div className="inp2">Diretor:   <input type="text"  onChange={e => setDiretor(e.target.value)}/></div>
                    </div>

                    <div className="linha-1">
                        <div className="inp3">Data de lançamento:   <input type="text" onChange={e => setLancamento(e.target.value)}/></div>
                        <div className="inpuu">Plataformas Dis. :   <input type="text" onChange={e => setPlataforma(e.target.value)}/></div>
                    </div>

                    <div className="linha1">
                        <div className="inp-d">Capa do Filme(Maior):   <input type="url" onChange={e => setimg_maior(e.target.value)}/></div>
                    </div>
                    <div className="linha1">
                        <div className="inp-d1">Capa do Filme(Menor):   <input type="url" onChange={e => setimg_menor(e.target.value)}/></div>
                    </div>

                    <div className="linha-d">
                        <div className="texto">Descrição:</div>
                        <div className="text">  <textarea type="text" onChange={e => setDescricao(e.target.value)}/></div>
                    </div>
                    <div className="linha-d1">
                      <div className="sep">
                        <div className="texto">Sinopse:</div>
                        <div className="text">  <textarea type="text" onChange={e => setSinopse(e.target.value)}/></div>
                      </div>
                        <div className="btn"><BotaoL onClick={Inserir}>imagem="" nome="Cadastrar"</BotaoL></div>
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
                {filme.map((item) => 
                  <tr>
                    <td> {item.nm_filme} </td>
                    <td> {item.ds_genero} </td>
                    <td> {item.nm_diretor} </td>
                    <td> {item.dt_lancamento} </td>
                    <td> {item.ds_plataforma} </td>
                    <td className="coluna-acao"> <button> <img src={Lapis} alt="" /> </button> </td>
                    <td className="coluna-acao"> <button> <img src={Lixeira} alt="" /> </button> </td>
                  </tr> 
                )}
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
                {filme.map((item) => 
                  <tr>
                    <td> {item.img_capa_menor} </td>
                    <td> {item.img_capa_maior} </td>
                    <td> {item.ds_descricao} </td>
                    <td> {item.ds_sinopse} </td>
                    <td className="coluna-acao"> <button> <img src={Lapis} alt="" /> </button> </td>
                    <td className="coluna-acao"> <button> <img src={Lixeira} alt="" /> </button> </td>
                  </tr> 
                )}
              </tbody> 
            </table>
            </Bloco2>
          </Parteprincipal>
      </Container>
    )
}