import LinhaSep from '../../assets/img/linha-sep-tcc.png'
import  LogoeBarra from '../../components/comum/tituloEbarra-login'
import BotaoL from '../../components/styled/botoes-rosa'
import { Container, Parte2 } from './style'

import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../service/api';
const api = new Api();


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState(''); 
    const [ConfirSenha, setConfirmSenha] = useState('');
    const [nascimento, setNascimento] = useState('');


    const navigation = useHistory();

    const logar = async () => {
        let r = await api.InserirU(nome, sobrenome, username, email, senha, nascimento);
        console.log(r);
        if(r.erro) {
            toast.error(`${r.erro}`)
        } else {
            navigation.push('/');
        }
    }

    return(
        <Container>
            <ToastContainer />
            <LogoeBarra />

            <Parte2>
                <div className="bloco1">
                    <div className="txt">Dados Pessoais</div>

                    <div className="inputsss">
                        <div className="sep">
                            <div className="inp">
                                <div className="txt-comp">Nome:</div>  
                                <input placeholder="Digite seu nome" value={nome} onChange={e => setNome(e.target.value)}/>
                            </div>

                            <div className="inp">
                                <div className="txt-comp">Sobrenome:</div>  
                                <input nome="Sobrenome:" placeholder="Digite seu sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
                            </div>
                        </div>

                        <div className="sep-d"> 
                            <div className="inp">
                                <div className="txt-comp">Username:</div>  
                                <input nome="Username:" placeholder="Digite seu username"  value={username} onChange={e => setUsername(e.target.value)}/>
                            </div>

                            <div className="inp">
                                <div className="txt-comp">Data de nascimento:</div>  
                                <input nome="Data de nascimento:" placeholder="Digite sua data de nascimento" type="Date"  value={nascimento} onChange={e => setNascimento(e.target.value)}/>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="barra"><img src={LinhaSep} alt="" /></div>

                <div className="bloco2">
                    <div className="txt">Dados de Login</div>

                    <div className="bloco-inp"> 
                        <div className="inp">
                            <div className="txt-d">E-mail:</div>  
                            <div className="input-d"><input  placeholder="Digite seu e-mail"  value={email} onChange={e => setEmail(e.target.value)}/></div>
                        </div>
                    </div>

                    <div className="inputsss-d">
                        <div className="inp">
                            <div className="txt-comp">Senha:</div>  
                            <input placeholder="Digite sua senha" type="password" value = {senha} onChange = {e => setSenha(e.target.value)}/>
                        </div>

                        <div className="inp">
                            <div className="txt-comp">Confirme sua senha:</div>  
                            <input placeholder="Confirme sua senha" type="password" value={ConfirSenha} onChange = {e => setConfirmSenha(e.target.value)}/>
                        </div>
            
                    </div>
                    
                    <div className="btn" onClick={logar}><BotaoL imagem="" nome="Cadastrar"/></div>

                </div>
            </Parte2>
        </Container>
    )
}