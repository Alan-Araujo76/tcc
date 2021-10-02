
import { Container } from "./styled"

export default function(props) {
    return(
        <Container> 
            <div className="inp">
                <div className="txt-comp">{props.nome}</div>  
                <div className="input"><input placeholder='Digite seu '/></div>
            </div>
        </Container>
    )
}