import LogoFace from '../../assets/img/logo(facebook).png'
import LogoGoogle from '../../assets/img/logo(google).png'

import  LogoeBarra from '../../components/comum/tituloEbarra-login'
import BotaoL from '../../components/styled/botoes-rosa'

import { Container, Parte2 } from './style'

import { Link } from 'react-router-dom';

export default function Login() {
    return(
        <Container>
            <LogoeBarra />

            <Parte2>
                <div className="inputs">
                    <div className="email"> 
                      <div className="txt-1">Email: </div>  
                      <div className="input"><input placeholder="Digite seu e-mail"/></div>
                    </div>
                    <div className="senha"> 
                      <div className="txt-1">Senha: </div>  
                      <div className="input"><input placeholder="Digite sua senha"/></div>
                    </div>
                </div>
                <div className="leva-princ">
                    <div className="botoes">
                        <div className="dif"><BotaoL imagem="" nome="Entrar"/></div>
                        <Link to="/cadastro"><BotaoL imagem="" nome="Cadastrar"/> </Link>
                    </div>
                    <div className="esq-senha"><Link to="/esqueci-senha">Esqueci senha</Link></div>
                </div>
                <div className="entrar-com">
                    <div className="txt">Ou entrar com:</div>
                    <div className="botoes-1">
                        <BotaoL imagem={LogoFace} nome="Facebook" />
                        <div className="bt-2"><BotaoL imagem={LogoGoogle} nome="Google" /></div>
                    </div>
                </div>
            </Parte2>
        </Container>
    )
}