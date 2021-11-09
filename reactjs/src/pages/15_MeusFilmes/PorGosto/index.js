////////////////////////// COMPONENTES //////////////////////////
import Cabecalho from '../../../components/comum/Cabecalho-Geral'
import Rodape from '../../../components/comum/Rodape-Geral'
import ProxPag from '../../../components/comum/ProxPag-Button'
import TituloC from '../../../components/comum/titulo'
import Modal from '../../../components/comum/Modal-Filmes'

////////////////////////// IMAGENS //////////////////////////
import LinhaSep from '../../../assets/img/linhasep-listass.png';


////////////////////////// STYLED //////////////////////////
import { Container, BlocoC } from './styled.js';


////////////////////////// OUTROS //////////////////////////
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

////////////////////////// API //////////////////////////
import Api from '../../../service/api';
const api = new Api();


export default function FilmesGostos(props) {
    const [filme, setFilme] = useState([]);
    const [exibirModal, setExibirModal] = useState({show: false})
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);

    async function Listar() {
        const resp = await axios.get('http://localhost:3030/filusu/ja/filmes?page=' + pagina);
        setFilme([...resp.data.itens]);
        setTotalPaginas(resp.data.totalPaginas);
    }

    function irPara(pagina) {
        setPagina(pagina);
    }


    useEffect(() => {
        Listar();
      }, [pagina]);



    return(
        <Container>
            <Cabecalho/>

            <TituloC nome="Meus Filmes"/>

            <div className="tipos">

                <div className="box1"><Link to="/meusfilmes">
                    <div className="txt-d">Já assistidos</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>
                
                <div className="box-c"><Link to="/meusfilmes/comfA">
                    <div className="txt-d">Assistir mais tarde</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>

                <div className="box"><Link to="/meusfilmes/comfP">
                    <div className="txt">Por gosto</div>
                    <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                </Link></div>

            </div>



            <div className="filmes">
                

                { filme.map(item => 
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
                                        <Link to={{ pathname: '/detfilmes', state: item}}>
                                            <div className="botao"><button>Ver mais</button></div>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </Modal>
                   
                            <div className="filme">
                                <div>
                                <Link to={{ pathname: '/detfilmes', state: item}}>
                                    <div className="img" ><img src={item.img_menor} alt="" /></div> 
                                    <div className="nome" title={ item.nome != null && item.nome > 25? item.nome : null }>{ item.nome != null && item.nome >= 25 ? item.nome.substr(0, 25) + '...' : item.nome }</div>
                                </Link>
                                </div>
                            </div>
                        </BlocoC>
                )}
            </div>

            <ProxPag 
                    totalPaginas={totalPaginas}
                    pagina={pagina}
                    onPageChange={irPara}
                />
            <Rodape/>
        </Container>
    )
}