////////////////////////// COMPONENTES //////////////////////////
import Cabecalho from '../../../components/comum/Cabecalho-Geral'
import Rodape from '../../../components/comum/Rodape-Geral'
import ProxPag from '../../../components/comum/ProxPag-Button'
import TituloC from '../../../components/comum/titulo'
import Modal from '../../../components/comum/Modal-Filmes'
import {Loader} from '../../../components/comum/Loader-Filmes'


////////////////////////// IMAGENS //////////////////////////
import Removerb from '../../../assets/img/Xremover.png';
import LinhaSep from '../../../assets/img/linhasep-listass.png';


////////////////////////// STYLED //////////////////////////
import { Container, BlocoC } from './styled.js';


////////////////////////// OUTROS //////////////////////////
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'


////////////////////////// API //////////////////////////
import Api from '../../../service/api';
import axios from 'axios'
const api = new Api();


export default function FilmesGostos(props) {
    const [ filme, setFilme ] = useState([]);
    const [ exibirModal, setExibirModal ] = useState({show: false})
    const [ ordenacao, setOrdanacao ] = useState('A - Z')
    const [ pagina, setPagina ] = useState(1);
    const [ totalPaginas, setTotalPaginas ] = useState(0);
    console.log(filme);

    async function Listar() {
        const resp = await axios.get('http://localhost:3030/filusu/ja/filmes?page=' + pagina);
        console.log(resp);
        setFilme([...resp.data.itens]);
        setTotalPaginas(resp.data.totalPaginas);
    }

    function irPara(pagina) {
        setPagina(pagina);
    }

    const Remove = async (id) => {
        const r = await api.RemoverF(id);
        toast.dark('🗑️ Filme Removido!');
        
        Listar();
    }

    useEffect(() => {
        Listar();
    }, [ordenacao, pagina]);

    

    return(
        <Container>
            <ToastContainer />
            <Cabecalho/>

            <TituloC nome="Meus Filmes"/>

            <div className="tipos">
                <div className="p1">
                    <div className="box1"><Link to="/meusfilmes">
                        <div className="txt-d">Já assistidos</div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </Link></div>
                    
                    <div className="box-c"><Link to="/meusfilmes/comfA">
                        <div className="txt">Assistir mais tarde</div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </Link></div>

                    <div className="box"><Link to="/meusfilmes/comfP">
                        <div className="txt-d">Por gosto</div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </Link></div>
                </div>

                <div className="p2">
                    <div className="ordenar">
                        <select onClick={e => setOrdanacao(e.target.value)}>
                            <option value="A - Z">A - Z</option>
                            <option value="Z - A">Z - A</option>
                            <option value="Avaliação">Avaliação</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="filmes">
                {filme.map(item => 
                        <BlocoC>
                        <Modal options={exibirModal}>
                            <div className="geral-m">
                                <div className="p1-m">
                                    <div className="img-m"><img src={item.img_menor} alt="" /></div>
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
                                <Link to={{ pathname: '/detfilmes', state: item}}>
                                    <div className="img"><img src={item.img_menor} alt="" /></div> 
                                    <div className="nome" title={ item.nome != null && item.nome > 25? item.nome : null }>{ item.nome != null && item.nome >= 25 ? item.nome.substr(0, 25) + '...' : item.nome }</div>
                                </Link>
                            </div>
                        </div>
                      </BlocoC>
                    )}
            </div>

            <div>
                <ProxPag 
                    totalPaginas={totalPaginas}
                    pagina={pagina}
                    onPageChange={irPara}
                />
            </div>


            <Rodape/>
        </Container>
    )
}

//onClick={() => setExibirModal({show: true})}

//'http://localhost:3030/filmesjassistidos?ordenacao=' + ordenacao
// const resp = await axios.get('http://localhost:3030/filmesjassistidos?ordenacao=' + ordenacao) setOrdanacao([...resp.data])