import { useState } from "react"
import { BlocoC } from "./styled"

export default function BoxFil(props) {
    const [semFilmes, setSemFilmes] = useState(null);


    return(
        <BlocoC>
            <div className="filme">
                <div className="img"><img src={props.filmes.imagem} alt="" /></div>
                <div className="nome" title={ props.filmes.nome != null && props.filmes.nome.length > 25? props.filmes.nome : null }>{ props.filmes.nome != null && props.filmes.nome.length >= 25 ?props.filmes.nome.substr(0, 25) + '..' : props.filmes.nome }</div>
            </div>
        </BlocoC>
    )
}