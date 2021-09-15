import LogoFace from '../../assets/img/logo(facebook).png'
import LogoGoogle from '../../assets/img/logo(google).png'

import  LogoeBarra from '../../componentes/tituloEbarra-login'
import { Container, Parte2 } from './style'

export default function Login() {
    return(
        <Container>
            <LogoeBarra />

            <Parte2>
                <div className="inputs">
                    <div className="email"> 
                      <div className="txt-1">Email: </div>  
                      <div className="input"><input/></div>
                    </div>
                    <div className="senha"> 
                      <div className="txt-1">Senha: </div>  
                      <div className="input"><input/></div>
                    </div>
                </div>
                <div className="leva-princ">
                    <div className="botoes">
                        <div className="dif"><button>Entrar</button></div>
                        <button>Cadastrar</button>
                    </div>
                    <div className="esq-senha"><a>Esqueci senha</a></div>
                </div>
                <div className="entrar-com">
                    <div className="txt">Ou entrar com:</div>
                    <div className="botoes-1">
                        <div className="bt-1"><button className="bt-1"><img src={LogoFace} alt="" />Facebook</button></div>
                        <div className="bt-2"><button><img src={LogoGoogle} alt="" />Google</button></div>
                    </div>
                </div>
            </Parte2>
        </Container>
    )
}