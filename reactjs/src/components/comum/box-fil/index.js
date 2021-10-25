import { BlocoC } from "./styled"

import Removerb from '../../../assets/img/Xremover.png';
import Modal from './modal';
import { useState } from "react";

export default function BoxFil(props) {
    const [exibirModal, setExibirModal] = useState(false);

    function remover() {
        props.onRemove(props.filmes.id);
    }

    return(
        <BlocoC>
             <Modal show={exibirModal}>
                <h1>bruno é lindo</h1>
                <h2>eu tbm, hehe</h2>
            </Modal>
            <div className="filme" onClick={() => setExibirModal(true)}> 
                <div className="remover" onClick={remover}> <img src={Removerb} alt=""/> </div>
                <div className="img"><img src={props.filmes.imagem} alt="" /></div>
                <div className="nome" title={ props.filmes.nome != null && props.filmes.nome.length > 25? props.filmes.nome : null }>{ props.filmes.nome != null && props.filmes.nome.length >= 25 ?props.filmes.nome.substr(0, 25) + '..' : props.filmes.nome }</div>
            </div>
            <div className="filme"> 
                <div className="remover" onClick={remover}> <img src={Removerb} alt=""/> </div>
                <div className="img"><img src="../../../assets/img/capa-menor.jpeg" alt="" /></div>
                <div className="nome"> Julinho </div>
            </div>
        </BlocoC>
    )
}