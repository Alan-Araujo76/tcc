import Cinema from '../../assets/img/cinema.png'
import Cabecalho from '../../components/comum/cabecalho'
import { Container } from './styled.js';

export default function Index() {
    return(
        <Container>
            <Cabecalho/>

            <div className="conteudo">
                <div className="p1">
                    <div className="titulo">S o b r e  <span style={{marginLeft: "50px"}}>n ó s</span></div>
                    <div className="subtitulo">A rede social para amantes de cinema</div>
                    <div className="descricao"><span style={{marginLeft: "100px"}}>Somos</span> uma plataforma feita para os amantes do cinema! Só aqui você consegue ter acesso à todos os filmes que existem. Aqui você pode salvar seus filmes favoritos, já assistidos e até que você pretende assistir. Pode criar listas para compartilhar com seus amigos e salvar listas feitas por outros usuários. Vocês podem avaliar filmes e fazer comentários sobre eles e até mesmo curtir os que vocês mais gostarem. Divirtam-se!</div>
                </div>

                <div className="p2">
                    <div className="img"><img src={Cinema} alt="" /></div>
                </div>
            </div>
        </Container>
    )
}