
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Direcionamento from './pages/1-direcionamento';

// Telas de Login
import LoginPrin from './pages/entrar-usu';
import Cadastrar from './pages/cadastrar-usu';
import EsqSenha from './pages/esqueci-senha-usu';

// Inserir um filme
import Inserir from './pages/inserir-filme'

// Tela de Perfil
import Perfil from './pages/tela-de-perfil';
import EditarPerfil from './pages/editar-perfil';

// Tela de categoria de filmes
import FilmesPopulares from './pages/filmes_gosto';
import FilmesGosto from './pages/filmes_gosto';

// Tela de Lista
import FilmeLista from './pages/filme-lista';
import CriarLista from './pages/criar-lista';

import Comentario from './pages/comentario';
import DetalhesFilme from './pages/detalhes-filme';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Direcionamento} />
                <Route path="/login" exact={true} component={LoginPrin} />
                <Route path="/cadastro" exact={true} component={Cadastrar} />
                <Route path="/esqueci-senha" exact={true} component={EsqSenha} />
                <Route path="/perfil" exact={true} component={Perfil} />
                <Route path="/editperfil" exact={true} component={EditarPerfil} />
                <Route path="/filmesporgosto" exact={true} component={FilmesGosto} />
                <Route path="/listafil" exact={true} component={FilmeLista} />
                <Route path="/criarlista" exact={true} component={CriarLista} />
                <Route path="/comentario" exact={true} component={Comentario} />
                <Route path="/detfilmes" exact={true} component={DetalhesFilme} />
                <Route path="/jiue886d54s" exact={true} component={Inserir} />
            </Switch>
        </BrowserRouter>
    )
}