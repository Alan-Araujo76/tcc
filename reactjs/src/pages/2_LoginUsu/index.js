import LogoFace from '../../assets/img/logo(facebook).png'
import LogoGoogle from '../../assets/img/logo(google).png'
import axios from 'axios';
import  LogoeBarra from '../../components/comum/tituloEbarra-login'
import BotaoL from '../../components/styled/botoes-rosa'
import { useState } from 'react';
import { Container, Parte2 } from './style'
import Cookies from 'js-cookie';

import { Link, useHistory } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const nav = useHistory();
    
    async function Login() {
        const r = await axios.post(`http://localhost:3030/login`, {email: senha, senha: senha});
        if (r.data.status === 'ok') {
        nav.push('/telainicial')    
        }else {
            alert(r.data.mensagem); 
        }
    } 

    return(
        <Container>
            <LogoeBarra />

            <Parte2>
                <div className="inputs">
                    <div className="email"> 
                      <div className="txt-1">Email: </div>  
                      <div className="input"><input placeholder="Digite seu e-mail"value={email} onChange={e => setEmail(e.target.value)}/> </div> 
                    </div>
                    <div className="senha"> 
                      <div className="txt-1">Senha: </div>  
                      <div className="input"><input type="password" placeholder="Digite sua senha"value={senha} onChange={e => setSenha(e.target.value)}/> </div>
                    </div>
                </div>
                <div className="leva-princ">
                    <div className="botoes">
                        <div onClick={Login} className="dif"><BotaoL imagem="" nome="Entrar" />  </div>
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