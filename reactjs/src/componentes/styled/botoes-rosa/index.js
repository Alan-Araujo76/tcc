

import { Botao } from "./styled"

export default function BotaoR(props) {
    return(
        <div>
            <Botao><img src={props.imagem} alt="" />{props.nome}</Botao>
        </div>
    )
}