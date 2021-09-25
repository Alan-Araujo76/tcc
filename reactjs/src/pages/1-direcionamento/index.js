import { Container }from './styled';
import { Link } from 'react-router-dom';

export default function Direcionamento() {
    return(
        <Container>
            <h1>Direcionamento</h1>
            <h2><Link to="/login">- Tela de Login</Link></h2>
            <h2><Link to="/cadastro">- Tela de Cadastrar</Link></h2>
            <h2><Link to="/esqueci-senha">- Tela de Esqueci Senha</Link></h2>
            <h2><Link to="/perfil">- Tela de Perfil</Link></h2>
            <h2><Link to="/editperfil">- Tela de Editar Perfil</Link></h2>
            <h2><Link to="/comentario">- Tela de Comentarios</Link></h2>
            <h2><Link to="/criarlista">- Tela de Criar uma Lista</Link></h2>
            <h2><Link to="/listafil">- Tela de Filme Lista</Link></h2>
            <h2><Link to="/filmesporgosto">- Tela de Filmes por Gosto</Link></h2>
            <h2><Link to="/jiue886d54s">- Tela de Inserir Filme</Link></h2>
        </Container>
    )
}