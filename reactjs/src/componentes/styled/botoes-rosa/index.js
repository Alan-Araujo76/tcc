

import { Botao } from "./styled"

export default function(props) {
    return(
        <div>
            <Botao><img src={props.imagem} alt="" />{props.nome}</Botao>
        </div>
    )
}