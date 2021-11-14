import  LogoeBarra from '../../components/comum/tituloEbarra-login'

import axios from 'axios';

import Modal from '../../components/comum/Modal-Filmes'
import { Container, Parte2 } from './style'
import BotaoL from '../../components/styled/botoes-rosa'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Esqueci(props) {
    const [exibirModal, setExibirModal] = useState({show: false});
    const [ email, setEmail] = useState('');
    const [ codigo, setCodigo] = useState();


    async function EnvEmail() {
        const r = await axios.post(`https://mw-heroku.herokuapp.com/login/esqueci`, { email: email  }); 
        if (r.data.status === 'Código Enviado') { 
            setExibirModal({show: true});
            toast('O código foi enviado no seu email.')
        } else {
            alert(r.data.mensagem);
        }
    }

    const nav = useHistory();

    async function validarCodigo() {
        const r = await axios.post(`https://mw-heroku.herokuapp.com/login/validarCodigo`, { email: email, codigo: codigo  }); console.log(r);console.log(email);
        if (r.data.mensagem === 'Código validado.') {
          nav.push('/recuperacao', { email: email, codigo: codigo });
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
                        Digite seu endereço de e-mail abaixo e enviaremos um link para que você possa redefinir sua senha.
                    </div>
                </div>
                <div className="email-inp-bt">
                    <div className="txt1">E-mail:</div>
                    <div className="input"><input style={{width: '30em', height: '3.5em', padding: '8px'}} type={Number} placeholder="Digite seu e-mail"  value={email} onChange={e => setEmail(e.target.value)} /></div>
                </div>
                <div className="botao" >
                    <button onClick={EnvEmail} style={{backgroundColor: 'transparent', border: 'transparent'}}><BotaoL nome="Enviar"/></button>
                </div>
            </Parte2>
        </Container>
    )
}
//{() => setExibirModal({show: true})}