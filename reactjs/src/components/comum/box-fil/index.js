import { BlocoC } from "./styled"

export default function BoxFil(props) {

    function remover() {
        props.onRemove(props.filmes.id);
    }
    return(
        <BlocoC>
            <div className="filme">
                <div className="remover" onClick={remover}> <span>X</span> </div>
                <div className="img"><img src={props.filmes.imagem} alt="" /></div>
                <div className="nome" title={ props.filmes.nome != null && props.filmes.nome.length > 25? props.filmes.nome : null }>{ props.filmes.nome != null && props.filmes.nome.length >= 25 ?props.filmes.nome.substr(0, 25) + '..' : props.filmes.nome }</div>
            </div>
        </BlocoC>
    )
}