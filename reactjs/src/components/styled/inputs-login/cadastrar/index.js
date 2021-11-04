
import { Container } from "./styled"

export default function Inp(props) {
    return(
        <Container> 
            <div className="inp">
                <div className="txt-comp">{props.nome}</div>  
                <div className="input"><input placeholder={props.placeholder}/></div>
            </div>
        </Container>
    )
}