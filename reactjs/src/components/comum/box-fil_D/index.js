import { useState } from "react"
import { BlocoC } from "./styled"
import Removerb from '../../../assets/img/Xremover.png';

import Api from '../../../1_service/api';
const api = new Api();

export default function BoxFil(props) {
    const [filme, setFilme] = useState(null);

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
                {Listar === (0) 
                ? <div><img src="https://blog.tiny.com.br/wp-content/uploads/2018/01/erro-nota-fiscal-1024x700.jpg" alt="" /><div>Você ainda não inseriu nenum filme</div></div> 
                : <div><div className="img"><img src={props.filmes.imagem} alt="" /></div> <div className="nome" title={ props.filmes.nome != null && props.filmes.nome.length > 25? props.filmes.nome : null }>{ props.filmes.nome != null && props.filmes.nome.length >= 25 ?props.filmes.nome.substr(0, 25) + '..' : props.filmes.nome }</div></div>}
            </div>
        </BlocoC>
    )
}