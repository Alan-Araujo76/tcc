import  LogoeBarra from '../../components/comum/tituloEbarra-login'

import axios from 'axios';

import Modal from '../../components/comum/modal'
import { Container, Parte2 } from './style'
import BotaoL from '../../components/styled/botoes-rosa'
import { useState } from 'react';
import { useHistory } from 'react-router';

export default function Esqueci() {
    const [exibirModal, setExibirModal] = useState({show: false});
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

            <Modal options={exibirModal}>
                <div className="geral-m">
                    <div className="txt-m">Insira o código enviado em seu email</div>
                    <div classNama="inp-modal"><input style={{width: '100%', height: '3.5em', padding: '10px'}} placeholder="Digite o código de recuperação"/><div className="r-m">Reenvie o código</div></div>
                    <div className="bt-m"><BotaoL nome="Confirmar"/></div>
                </div>
            </Modal>

            <Parte2>
                <div className="texto">
                    <div className="txt">
                        Digite seu endereço de e-mail abaixo e enviaremos um link para que você possa redefinir sua senha.
                    </div>
                </div>
                <div className="email-inp-bt">
                    <div className="txt1">E-mail:</div>
                    <div className="input"><input style={{width: '30em', height: '3.5em', padding: '8px'}} type={Number} placeholder="Digite seu e-mail"  value={email} onChange={e => setEmail(e.target.value)} /></div>
                </div>
                <div className="botao" onClick={Recuperar}>
                    <button onClick={Recuperar}><BotaoL nome="Enviar"/></button>
                </div>
            </Parte2>
        </Container>
    )
}
//{() => setExibirModal({show: true})}