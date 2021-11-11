import  LogoeBarra from '../../components/comum/tituloEbarra-login'

import axios from 'axios';

import { Container, Parte2 } from './style'
import BotaoL from '../../components/styled/botoes-rosa'
import { useState } from 'react';
import { useHistory } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

export default function Esqueci(props) {
    const [ novaSenha, setNovaSenha] = useState('');

    const nav = useHistory();

    async function alterarSenha() {
        const r = await axios.put(`http://localhost:3030/login/resetarsenha`, { 
          email: props.location.state.email,
          codigo: props.location.state.codigo,
          novaSenha: novaSenha 
        });
 
        if (r.data.status === 'ok') {
          toast('Senha alterada!');
          nav.push('/');
        } else {
          toast(r.data.mensagem);
        }
      }

    return(
        <Container>
            <ToastContainer />
            <LogoeBarra />
            <Parte2>
                <div className="texto">
                    <div className="txt">
                        Digite sua nova senha abaixo.
                    </div>
                </div>
                <div className="email-inp-bt">
                    <div className="input-d"><input style={{width: '30em', height: '3.5em', padding: '8px'}} type={Number} placeholder="Digite seu e-mail"  value={novaSenha} onChange={e => setNovaSenha(e.target.value)} /></div>
                
                    <div className="txt1">Confirme sua senha:</div>
                    <div className="input"><input style={{width: '30em', height: '3.5em', padding: '8px'}} type={Number} placeholder="Digite seu e-mail"  value={novaSenha} onChange={e => setNovaSenha(e.target.value)} /></div>
                </div>
                <div className="botao">
                    <button onClick={alterarSenha}><BotaoL nome="Confirmar"/></button>
                </div>
            </Parte2>
        </Container>
    )
}
//{() => setExibirModal({show: true})}