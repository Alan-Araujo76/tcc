
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Direcionamento from './pages/0_direcionamento';


import LoginPrin from './pages/2_LoginUsu';
import Cadastrar from './pages/3_LoginCadastro';
import EsqSenha from './pages/4_EsqSenha';
// import Recuperacao from './pages/4_Recuperacao';
// import DetalhesFilme from './pages/5_FilmeG';
// import Comentario from './pages/6_Comentario';
import Perfil from './pages/7_Perfil';
import EditarPerfil from './pages/8_EditarPer';
// import ListasPopulares from './pages/9_ListasPops';
import FilmesPopulares from './pages/10_FilmesPops';
import FilmesGosto from './pages/15_MeusFilmes/PorGosto';
// import ListasGC from './pages/12_ListasG_C';
// import ListasGS from './pages/12_ListasG_S';
// import FilmeLista from './pages/13_FilmesDaLista';
// import CriarLista from './pages/14_CriarLista';
import AssistirMaisTarde from './pages/15_MeusFilmes/AssistirMaisTarde';
import JaAssistidos from './pages/15_MeusFilmes/JaAssistidos';
// import SobreNos from './pages/16_SobreNos';
// import Contatos from './pages/17_Contatos';
// import PoliticaP from './pages/18_PoliticaDeP';
// import TermosU from './pages/19_TermodUso';

// // Telas de ADM
// import LoginAdm from './pages/Adm_Login';
// import InserirF from './pages/Adm_InserirF';


//Tela Inicial
import TelaInicial from './pages/1_TelaInicial';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                {/* <Route path="/dire" exact={true} component={Direcionamento} /> */}

              
                <Route path="/" exact={true} component={LoginPrin} />
                <Route path="/telaini" exact={true} component={TelaInicial} />
                <Route path="/cadastro" exact={true} component={Cadastrar} />
                <Route path="/esqueci-senha" exact={true} component={EsqSenha} />
                <Route path="/meusfilmes" exact={true} component={JaAssistidos} />
                <Route path="/meusfilmes/comfA" exact={true} component={AssistirMaisTarde}/>
                <Route path="/meusfilmes/comfP" exact={true} component={FilmesGosto} />
                <Route path="/filmespopulares" exact={true} component={FilmesPopulares} />
                <Route path="/perfil" exact={true} component={Perfil} />
                <Route path="/editperfil" exact={true} component={EditarPerfil} />



                {/*   <Route path="/" exact={true} component={TelaInicial} />
                <Route path="/cadastro" exact={true} component={Cadastrar} />
                <Route path="/esqueci-senha" exact={true} component={EsqSenha} />
                <Route path="/recuperacao" exact={true} component={Recuperacao} />

                <Route path="/detfilmes" exact={true} component={DetalhesFilme} />
                <Route path="/comentario" exact={true} component={Comentario} />

                <Route path="/perfil" exact={true} component={Perfil} />
                <Route path="/editperfil" exact={true} component={EditarPerfil} />

                <Route path="/filmespopulares" exact={true} component={FilmesPopulares} />
                <Route path="/listapop" exact={true} component={ListasPopulares} />

                <Route path="/meusfilmes/comfP" exact={true} component={FilmesGosto} />

                <Route path="/listasgc" exact={true} component={ListasGC} />
                <Route path="/listasgs" exact={true} component={ListasGS} />
                <Route path="/listafil" exact={true} component={FilmeLista} />
                <Route path="/criarlist" exact={true} component={CriarLista} />
                
                <Route path="/meusfilmes/comfA" exact={true} component={AssistirMaisTarde} />
                <Route path="/meusfilmes" exact={true} component={JaAssistidos} />

                <Route path="/sobrenos" exact={true} component={SobreNos} />
                <Route path="/contatos" exact={true} component={Contatos} />

                <Route path="/politicap" exact={true} component={PoliticaP} />
                <Route path="/termosU" exact={true} component={TermosU} />

                <Route path="/admlogin83497" exact={true} component={LoginAdm} />
                <Route path="/adminserir54hu897" exact={true} component={InserirF} /> */}
            </Switch>
        </BrowserRouter>
    )
}