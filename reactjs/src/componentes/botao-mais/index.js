
import { Container } from "./styled";
import Mais from '../../assets/img/mais.png'

export default function BotaoMais() {
    return(
        <Container>
            <div className="but-b2"><button><img src={Mais} alt="" /></button></div>
            <div className="txt-b2">Adicionar  </div>
        </Container>
    )
}