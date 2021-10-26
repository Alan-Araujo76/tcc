import { useState } from "react"
import { BlocoC } from "./styled"
import Removerb from '../../../assets/img/Xremover.png';
import eu from '../../../assets/img/eu.jpg';

import Api from '../../../1_service/api';
const api = new Api();

export default function BoxFil(props) {
    const [filme, setFilme] = useState([]);

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
            <div className="filme">
                <div className="remover" onClick={remover}> <img src={Removerb} alt=""/> </div>
                {Listar === null || Listar === Array([])
                    ? <div><img src={eu} alt="" /><div>Você ainda não inseriu nenum filme</div></div> 
                    : <div><div className="img"><img src={props.filmes.imagem} alt="" /></div> <div className="nome" title={ props.filmes.nome != null && props.filmes.nome.length > 25? props.filmes.nome : null }>{ props.filmes.nome != null && props.filmes.nome.length >= 25 ?props.filmes.nome.substr(0, 25) + '..' : props.filmes.nome }</div></div>
                }
            </div>
        </BlocoC>
    )
}