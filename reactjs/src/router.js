
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Telas de Login
import LoginPrin from './pages/entrar-usu';
import Cadastrar from './pages/cadastrar-usu';
import EsqSenha from './pages/esqueci-senha-usu';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact={true} component={LoginPrin} />
                <Route path="/cadastro" exact={true} component={Cadastrar} />
                <Route path="/esqueci-senha" exact={true} component={EsqSenha} />
            </Switch>
        </BrowserRouter>
    )
}