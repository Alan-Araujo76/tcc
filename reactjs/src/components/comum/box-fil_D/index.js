import { useState } from "react"
import { BlocoC } from "./styled"

export default function BoxFil(props) {
    const [semFilmes, setSemFilmes] = useState(null);


    return(
        <BlocoC>
            <div className="filme">
                {semFilmes == null ? <div><img src="https://blog.tiny.com.br/wp-content/uploads/2018/01/erro-nota-fiscal-1024x700.jpg" alt="" /><div>Você ainda não inseriu nenum filme</div></div> :   <div><div className="img"><img src={props.filmes.imagem} alt="" /></div> <div className="nome" title={ props.filmes.nome != null && props.filmes.nome.length > 25? props.filmes.nome : null }>{ props.filmes.nome != null && props.filmes.nome.length >= 25 ?props.filmes.nome.substr(0, 25) + '..' : props.filmes.nome }</div></div>}
            </div>
        </BlocoC>
    )
}