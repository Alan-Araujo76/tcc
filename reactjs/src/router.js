
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
import FilmesGosto from './pages/filmes_gosto';

// Tela de Lista
import AssistirMaisTarde from './pages/assistir-mais-tarde';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact={true} component={LoginPrin} />
                <Route path="/cadastro" exact={true} component={Cadastrar} />
                <Route path="/esqueci-senha" exact={true} component={EsqSenha} />
                <Route path="/perfil" exact={true} component={Perfil} />
                <Route path="/editperfil" exact={true} component={EditarPerfil} />
                <Route path="/filmesporgosto" exact={true} component={FilmesGosto} />
                <Route path="/jiue886d54s" exact={true} component={Inserir} />
                <Route path="/assistirtarde" exact={true} component={AssistirMaisTarde} />
            </Switch>
        </BrowserRouter>
    )
}