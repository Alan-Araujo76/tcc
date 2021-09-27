
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
import FilmesPopulares from './pages/filmes-populares';
import FilmesGosto from './pages/filmes_gosto';
import AssistirMaisTarde from './pages/filmes-assistir-depois';
import JaAssistidos from './pages/filmes-já-assist';

// Tela de Lista
import ListasG from './pages/listas-geral';
import FilmeLista from './pages/filme-lista';
import ListasPopulares from './pages/listas-populares';

import Comentario from './pages/comentario';
import DetalhesFilme from './pages/detalhes-filme';

//Tela Inicial
import TelaInicial from './pages/tela-inicial';

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
                <Route path="/filmespopulares" exact={true} component={FilmesPopulares} />
                <Route path="/listapop" exact={true} component={ListasPopulares} />
                <Route path="/listafil" exact={true} component={FilmeLista} />
                <Route path="/listasg" exact={true} component={ListasG} />
                <Route path="/comentario" exact={true} component={Comentario} />
                <Route path="/detfilmes" exact={true} component={DetalhesFilme} />
                <Route path="/assistimtarde" exact={true} component={AssistirMaisTarde} />
                <Route path="/jassistidos" exact={true} component={JaAssistidos} />
                <Route path="/jiue886kjhlhefiorechd54s" exact={true} component={Inserir} />
                <Route path="/telainicial" exact={true} component={TelaInicial} />
            </Switch>
        </BrowserRouter>
    )
}