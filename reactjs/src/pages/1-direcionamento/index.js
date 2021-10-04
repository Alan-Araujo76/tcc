import { Container }from './styled';
import { Link } from 'react-router-dom';

export default function Direcionamento() {
    return(
        <Container>
            <h1 className="txt">
                <span style={{color: "#FF005C",  fontweight: "none"}}>Movies</span> World
            </h1>

            <div className="g">
                <h2>Direcionamento</h2>

                <div className="cat">
                    <h3>Telas de login:</h3>
                    <h4><Link to="/login"> - Tela de Login</Link></h4>
                    <h4><Link to="/cadastro">- Tela de Cadastrar</Link></h4>
                    <h4><Link to="/esqueci-senha">- Tela de Esqueci Senha</Link></h4>
                </div>

                <div className="cat">
                    <h3>Telas sobre filmes:</h3>
                    <h4><Link to="/detfilmes">- Tela de Info. de um filme</Link></h4>
                    <h4><Link to="/telainicial">- Tela Inicial</Link></h4>
                </div>

                <div className="cat">
                    <h3>Telas de perfil:</h3>
                    <h4><Link to="/perfil">- Tela de Perfil</Link></h4>
                    <h4><Link to="/editperfil">- Tela de Editar Perfil</Link></h4>
                    <h4><Link to="/comentario">- Tela de Comentarios</Link></h4>
                </div>

                <div className="cat">
                    <h3>Telas de lista:</h3>
                    <h4><Link to="/listasg">- Tela de Lista do usuario(Geral)</Link></h4>
                    <h4><Link to="/listafil">- Tela de Filme Lista</Link></h4>
                    <h4><Link to="/listapop">- Tela de Listas Populares</Link></h4>
                    <h4><Link to="/criarlist">- Tela para Criar Listas</Link></h4>
                </div>

                 <div className="cat">
                    <h3>Telas de categorias de filmes:</h3>
                    <h4><Link to="/filmesporgosto">- Tela de Filmes por Gosto</Link></h4>
                    <h4><Link to="/jassistidos">- Tela de Filmes já assistidos</Link></h4>
                    <h4><Link to="/assistimtarde">- Tela de assistir mais tarde</Link></h4>
                    <h4><Link to="/filmespopulares">- Tela de Filmes Populares</Link></h4>
                </div>
            </div>
        </Container>
    )
}