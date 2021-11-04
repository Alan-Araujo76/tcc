import { useState } from "react"
import { BlocoC } from "./styled"
import Removerb from '../../../assets/img/Xremover.png';
import eu from '../../../assets/img/eu.jpg';

import Modal from '../modal'

import Api from '../../../1_service/api';
const api = new Api();

export default function BoxFil(props) {
    const [filme, setFilme] = useState([]);
    const [exibirModal, setExibirModal] = useState([]);

    function remover() {
        props.onRemove(props.filmes.id);
    }

    async function Listar() {
        let r = await api.ListarFG();
        console.log(r);
        setFilme(r);
    }

    

    return(
        <BlocoC>
            <Modal options={exibirModal}>
                <div className="geral-m">
                    <div className="p1-m">
                        <div className="img-m"><img src={props.filmes.img_menor} alt="" /></div>
                        <div className="nome-m" title={ props.filmes.nome != null && props.filmes.nome.length > 25? props.filmes.nome : null }>{ props.filmes.nome != null && props.filmes.nome.length >= 25 ?props.filmes.nome.substr(0, 25) + '..' : props.filmes.nome }</div>
                    </div>
                    <div className="sep"></div>
                    <div className="p2">
                        <div className="sub-m"><b>Diretor:</b> {props.filmes.diretor}</div>
                        <div className="sub-m"><b>Descrição:</b> { props.filmes.descricao != null && props.filmes.descricao.length >= 105 ?props.filmes.descricao.substr(0, 105) + '...' : props.filmes.descricao }</div>
                        <div className="sub2-m"><b>Plataformas:</b> {props.filmes.plataforma}</div>
                        <div className="botao"><button>Ver mais</button></div>
                    </div>
                </div>
            </Modal>
            
            <div className="filme">
                <div className="remover" onClick={remover}> <img src={Removerb} alt=""/> </div>
                {Array.length != 0
                    ? <div onClick={() => setExibirModal({show: true})}>
                        <div className="img"><img src={props.filmes.img_menor} alt="" /></div> 
                        <div className="nome" title={ props.filmes.nome != null && props.filmes.nome.length > 25? props.filmes.nome : null }>{ props.filmes.nome != null && props.filmes.nome.length >= 25 ?props.filmes.nome.substr(0, 25) + '..' : props.filmes.nome }</div>
                    </div>

                    : <div><img src={eu} alt="" /><div>Você ainda não inseriu nenum filme</div></div> 

    
                }
            </div>
        </BlocoC>
    )
}
//Listar === null || Listar === Array([]) || Listar === Array(0) ||