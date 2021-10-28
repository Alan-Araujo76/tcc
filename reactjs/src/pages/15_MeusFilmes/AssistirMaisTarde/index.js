import Cabecalho from '../../../components/comum/cabecalho'
import Rodape from '../../../components/comum/rodapê'
import ProxPag from '../../../components/comum/botao-prox-pag'
import TituloC from '../../../components/comum/titulo'
import Modal from '../../../components/comum/modal'
import { Container, BlocoC } from './styled.js';

import Removerb from '../../../assets/img/Xremover.png'
import LinhaSep from '../../../assets/img/linhasep-listass.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Api from '../../../1_service/api';
const api = new Api();

export default function FilmesGostos(props) {
    const [filme, setFilme] = useState([]);
    const [exibirModal, setExibirModal] = useState({show: false})

    async function Listar() {
        let r = await api.ListarF();
        setFilme(r);
    }

    const Remove = async (id) => {
        const r = await api.RemoverF(id);
        toast.dark('🗑️ Filme Removido!');
        
        Listar();
    }

    useEffect(() => {
        Listar();
      }, []);

    return(
        <Container>
            <Cabecalho/>

            <TituloC nome="Meus Filmes"/>

            <div className="tipos">
                <div className="box1"><Link to="/meusfilmes">
                    <div className="txt-d">Já assistidos</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>
                
                <div className="box-c"><Link to="/assistimtarde">
                    <div className="txt">Assistir mais tarde</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>

                <div className="box"><Link to="/filmespgosto">
                    <div className="txt-d">Por gosto</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>
            </div>

            <div className="filmes">
                {filme.map(item => 
                <BlocoC>
                    <Modal options={exibirModal}>
                        <div className="geral-m">
                            <div className="p1-m">
                                <div className="img-m"><img src={ item.img_menor } alt="" /></div>
                                <div className="nome-m" title={ item.nome != null && item.nome > 25? item.nome : null }>{ item.nome != null && item.nome >= 25 ? item.nome.substr(0, 25) + '..' : item.nome }</div>
                            </div>
                            <div className="sep"></div>
                            <div className="p2">
                                <div className="sub-m"><b>Diretor:</b> {item.diretor}</div>
                                <div className="sub-m"><b>Descrição:</b> { item.descricao != null && item.descricao >= 105 ? item.descricao.substr(0, 105) + '...' : item.descricao }</div>
                                <div className="sub2-m"><b>Plataformas:</b> {item.plataforma}</div>
                                <div className="botao"><button>Ver mais</button></div>
                            </div>
                        </div>
                    </Modal>
                   
                   <div className="filme">
                            <div>
                               <div className="remover" onClick={Remove}> <img src={Removerb} alt=""/> </div>
                               <div className="img" onClick={() => setExibirModal({show: true})}><img src={item.img_menor} alt="" /></div> 
                               <div className="nome" onClick={() => setExibirModal({show: true})} title={ item.nome != null && item.nome > 25? item.nome : null }>{ item.nome != null && item.nome >= 25 ? item.nome.substr(0, 25) + '...' : item.nome }</div>
                            </div>
                   </div>
                  </BlocoC>
                )}
            </div>

            <ProxPag />


            <Rodape/>
        </Container>
    )
}