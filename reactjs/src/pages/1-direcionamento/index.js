import { Container }from './styled';

import Entrar from '../entrar-usu';
import Cadastro from '../cadastrar-usu';
import EsqueciSenha from '../esqueci-senha-usu';
import Perfil from '../tela-de-perfil';
import EditarPerfil from '../editar-perfil';
import Comentario from '../comentario';
import CriaLista from '../criar-lista';
import FilmeLista from '../filme-lista';
import FilmeGosto from '../filmes_gosto';
import InserirFilme from '../inserir-filme';

export default function Direcionamento() {
    return(
        <Container>
            <h1>Direcionamento</h1>
            <h2><a href={Entrar}>- Tela de Login</a></h2>
            <h2><a href={Cadastro}>- Tela de Cadastrar</a></h2>
            <h2><a href={EsqueciSenha}>- Tela de Esqueci Senha</a></h2>
            <h2><a href={Perfil}>- Tela de Perfil</a></h2>
            <h2><a href={EditarPerfil}>- Tela de Editar Perfil</a></h2>
            <h2><a href={Comentario}>- Tela de Comentarios</a></h2>
            <h2><a href={CriaLista}>- Tela de Criar uma Lista</a></h2>
            <h2><a href={FilmeLista}>- Tela de Filme Lista</a></h2>
            <h2><a href={FilmeGosto}>- Tela de Filmes por Gosto</a></h2>
            <h2><a href={InserirFilme}>- Tela de Inserir Filme</a></h2>
        </Container>
    )
}