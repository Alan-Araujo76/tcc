import  LogoeBarra from '../../components/comum/tituloEbarra-login'

import axios from 'axios';

import { Container, Parte2 } from './style'
import BotaoL from '../../components/styled/botoes-rosa'
import { useState } from 'react';
import { useHistory } from 'react-router';

export default function Esqueci() {
    const [ email, setEmail] = useState('');

    const nav = useHistory();

    async function Recuperar() {
        const r = await axios.post(`http://localhost:3030/login/esqueci`, { email: email  });
        if (r.data.status === 'ok') {
            nav.push('/perfil');
        } else {
            alert(r.data.mensagem);
        }
    }

    return(
        <Container>
            <LogoeBarra />
            <Parte2>
                <div className="texto">
                    <div className="txt">
                        Digite sua nova senha abaixo.
                    </div>
                </div>
                <div className="email-inp-bt">
                    <div className="input-d"><input style={{width: '30em', height: '3.5em', padding: '8px'}} type={Number} placeholder="Digite seu e-mail"  value={email} onChange={e => setEmail(e.target.value)} /></div>
                
                    <div className="txt1">Confirme sua senha:</div>
                    <div className="input"><input style={{width: '30em', height: '3.5em', padding: '8px'}} type={Number} placeholder="Digite seu e-mail"  value={email} onChange={e => setEmail(e.target.value)} /></div>
                </div>
                <div className="botao" onClick={Recuperar}>
                    <BotaoL nome="Confirmar"/>
                </div>
            </Parte2>
        </Container>
    )
}
//{() => setExibirModal({show: true})}