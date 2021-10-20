import { BlocoC } from "./styled"

export default function BoxFil(props) {
    return(
        <BlocoC>
            <div className="filme">
                <div className="img"><img src={props.info.img_menor} alt="" /></div>
                <div className="nome" title={ props.info.nome != null && props.info.nome.length > 20? props.info.nome : null }>{ props.info.nome != null && props.info.nome.length >= 20 ?props.info.nome.substr(0, 20) + '..' : props.info.nome }</div>
            </div>
        </BlocoC>
    )
}