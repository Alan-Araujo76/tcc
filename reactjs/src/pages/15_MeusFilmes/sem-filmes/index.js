import { Container } from './styled.js';
import eu from '../../assets/img/eu.jpg'

export default function Index() {
    return(
        <Container>
            <div><img src={eu} alt="" /><div>Você ainda não inseriu nenum filme</div></div> 
        </Container>
    )
}