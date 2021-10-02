
import { Container } from "./styled";
import Mais from '../../../assets/img/mais.png'

export default function BotaoMaisC() {
    return(
        <Container>
            <div className="llll"><button><img src={Mais} alt="" /></button></div>
            <div className="kkkk">Adicionar  </div>
        </Container>
    )
}