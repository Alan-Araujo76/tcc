import Cabecalho from '../../components/comum/cabecalho'
import Rodape from '../../components/comum/rodapê'
import ProxPag from '../../components/comum/botao-prox-pag'
import TituloC from '../../components/comum/titulo'
import eu from '../../assets/img/eu.jpg';

import Modal from '../../components/comum/modal'

import { Container, BlocoC } from './styled.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react'
import Api from '../../1_service/api';
const api = new Api();

export default function FilmesGostos(props) {
    const [filme, setFilme] = useState([]);
    const [exibirModal, setExibirModal] = useState({show: false});

    async function Listar() {
        let r = await api.ListarF();
        console.log(r);
        setFilme(r);
    }

    useEffect(() => {
        Listar();
      }, []);

    

    return(
        <Container>
            <ToastContainer />
            <Cabecalho/>

            <TituloC nome="Filmes populares"/>  
            
            <div className="filmes" >
                {filme.map(item => 
                   <BlocoC>
                    <Modal options={exibirModal}>
                        <div className="geral-m">
                            <div className="p1-m">
                                <div className="img-m"><img src={props.img_menor} alt="" /></div>
                                <div className="nome-m" title={ props.nome != null && props.nome.length > 25? props.nome : null }>{ props.nome != null && props.nome.length >= 25 ?props.nome.substr(0, 25) + '..' : props.nome }</div>
                            </div>
                            <div className="sep"></div>
                            <div className="p2">
                                <div className="sub-m"><b>Diretor:</b> {props.diretor}</div>
                                <div className="sub-m"><b>Descrição:</b> { props.descricao != null && props.descricao.length >= 105 ?props.descricao.substr(0, 105) + '...' : props.descricao }</div>
                                <div className="sub2-m"><b>Plataformas:</b> {props.plataforma}</div>
                                <div className="botao"><button>Ver mais</button></div>
                            </div>
                        </div>
                    </Modal>
                    
                    <div className="filme">
                        {Array.length != 0
                            ? <div onClick={() => setExibirModal({show: true})}>
                                <div className="img"><img src={props.img_menor} alt="" /></div> 
                                <div className="nome" title={ props.nome != null && props.nome.length > 25? props.nome : null }>{ props.nome != null && props.nome.length >= 25 ?props.nome.substr(0, 25) + '...' : props.nome }</div>
                            </div>
        
                            : <div><img src={eu} alt="" /><div>Você ainda não inseriu nenum filme</div></div> 
                        }
                    </div>
                   </BlocoC>
                )}
            </div>

            <ProxPag/>


            <Rodape/>
        </Container>
    )
}

