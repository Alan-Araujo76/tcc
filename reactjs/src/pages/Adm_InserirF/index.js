import Lapis from '../../assets/img/alterar.svg';
import Lixeira from '../../assets/img/lixeira.svg';
import BarraT from '../../assets/img/barra-tcc.png';
import Att from '../../assets/img/atualizar.svg';
import Sair from '../../assets/img/sair.svg';
import FotoP from '../../assets/img/mdm.jpg';

import BotaoL from '../../components/styled/botoes-rosa'
import { Container, Cabecalho, Parteprincipal, Bloco1, Bloco2 } from './styled';

import { useState, useEffect, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../../1_service/api';
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

  const loading = useRef(null);

  async function Listar() {
    let r = await api.ListarF();
    setFilme(r);
  }

  async function InserirFil() {
    loading.current.continuousStart();

    if(idAlterando === 0) {
      let r = await api.InserirF(nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor);
      
      if(r.erro) {
          toast.error(`${r.erro}`);
          return;
      } else {
          toast.dark('💕 Filme cadastrado com sucesso!');
        }
    } else {
      let r = await api.AlterarF(nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor);

      if(r.erro) {
        toast.error(`${r.erro}`);
        return;
      } else {
        toast.dark('✏️ Filme alterado!');
      }
    }

    LimparCampos();
    Listar();
  }

  function LimparCampos() {
    setNome('');
    setGenero('');
    setSinopse('');
    setDescricao('');
    setDiretor('');
    setLancamento('');
    setPlataforma('');
    setimg_maior('');
    setimg_menor('');
    setIdAlterando(0);
  }


  async function Editar(item) {
      setNome(item.nm_filme);
      setGenero(item.ds_genero);
      setSinopse(item.ds_sinopse);
      setDescricao(item.ds_descricao);
      setDiretor(item.nm_diretor)
      setLancamento(item.ano_lancamento);
      setPlataforma(item.ds_plataforma);
      setAvalicao(item.ds_avaliacao);
      setimg_maior(item.img_capa_maior);
      setimg_menor(item.img_capa_menor);
      setIdAlterando(item.id_filme);
  }


  async function Deletar(IdAlterando) {
    confirmAlert({
      title: 'Remover Filme',
      message: `Tem certeza que deseja remover o filme ${IdAlterando} ?`,
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
              const r = await api.RemoverF(idAlterando);
              toast.dark('🗑️ Filme Removido!');
              Listar();
          }
        },
        {
          label: 'Não'
        }
      ]
    });
  }


  useEffect(() => {
    Listar();
  }, []);


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

        

            <Parteprincipal>
            <Bloco1>
                <div className="titulo">
                    <div className="barra"><img src={BarraT} alt="" /></div>
                    <div className="texto1">Novo Filme</div>
                </div>

                <div className="inputs">

                    <div className="linha1">
                        <div className="inp1">Nome:   <input type="text" value={nome} onChange={e => setNome(e.target.value)} /></div>
                        <div className="inp">Genêro:   <input type="text" value={genero} onChange={e => setGenero(e.target.value)}/></div>
                        <div className="inp2">Diretor:   <input type="text"  value={diretor} onChange={e => setDiretor(e.target.value)}/></div>
                    </div>

                    <div className="linha-1">
                        <div className="inp3">Data de lançamento:   <input type="text" value={lancamento} onChange={e => setLancamento(e.target.value)}/></div>
                        <div className="inpuu">Plataformas Dis. :   <input type="text" value={plataforma} onChange={e => setPlataforma(e.target.value)}/></div>
                    </div>

                    <div className="linha1">
                        <div className="inp-d">Capa do Filme(Maior):   <input type="url" value={img_maior} onChange={e => setimg_maior(e.target.value)}/></div>
                    </div>
                    <div className="linha1">
                        <div className="inp-d1">Capa do Filme(Menor):   <input type="url" value={img_menor} onChange={e => setimg_menor(e.target.value)}/></div>
                    </div>

                    <div className="linha-d">
                        <div className="texto">Descrição:</div>
                        <div className="text">  <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/></div>
                    </div>
                    <div className="linha-d1">
                      <div className="sep">
                        <div className="texto">Sinopse:</div>
                        <div className="text">  <textarea type="text" value={sinopse} onChange={e => setSinopse(e.target.value)}/></div>
                      </div>
                        <div className="btn"><BotaoL imagem="" nome="Cadastrar" onClick={InserirFil}></BotaoL></div>
                    </div>
                </div>
            </Bloco1>

            <Bloco2>
                <div className="titulo">
                        <div className="barra"><img src={BarraT} alt="" /></div>
                        <div className="texto1">Filmes já Cadastrados</div>
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
                    <td> {item.ano_lancamento} </td>
                    <td title={ item.ds_plataforma != null && item.ds_plataforma.length > 30 ? item.ds_plataforma : null }> { item.ds_plataforma != null && item.ds_plataforma.length >= 30 ? item.ds_plataforma.substr(0, 30) + '...' : item.ds_plataforma } </td>
                    <td className="coluna-acao"> <button onClick={() => Editar(item)}> <img src={Lapis} alt="" /> </button> </td>
                    <td className="coluna-acao"> <button onClick={() => Deletar(item.id_matricula)}> <img src={Lixeira} alt="" /> </button> </td>
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
                    <td className="imgM"> <img src={item.img_capa_menor} alt=""/> </td>
                    <td className="imgM1"> <img src={item.img_capa_maior} alt=""/> </td>
                    <td title={ item.ds_descricao != null && item.ds_descricao.length > 150 ? item.ds_descricao : null }> { item.ds_descricao != null && item.ds_descricao.length >= 150 ? item.ds_descricao.substr(0, 150) + '...' : item.ds_descricao } </td>
                    <td title={ item.ds_sinopse != null && item.ds_sinopse.length > 150 ? item.ds_sinopse : null }> { item.ds_sinopse != null && item.ds_sinopse.length >= 150 ? item.ds_sinopse.substr(0, 150) + '...' : item.ds_sinopse } </td>
                    <td className="coluna-acao"> <button onClick={() => Editar(item)}> <img src={Lapis} alt="" /> </button> </td>
                    <td className="coluna-acao"> <button onClick={() => Deletar(item.id_matricula)}> <img src={Lixeira} alt="" /> </button> </td>
                  </tr> 
                )}
              </tbody> 
            </table>
            </Bloco2>
          </Parteprincipal>
      </Container>
    )
}