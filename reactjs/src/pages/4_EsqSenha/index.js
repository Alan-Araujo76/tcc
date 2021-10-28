import  LogoeBarra from '../../components/comum/tituloEbarra-login'

import Modal from '../../components/comum/modal'
import { Container, Parte2 } from './style'
import BotaoL from '../../components/styled/botoes-rosa'
import { useState } from 'react';

export default function Esqueci() {
    const [exibirModal, setExibirModal] = useState({show: false});

    return(
        <Container>
            <LogoeBarra />
            
            <Parte2>
                <Modal options={exibirModal}>
                    <div className="geral-m">
                        <div className="txt-m">Insira o código enviado em seu email</div>
                        <div classNama="inp-modal"><input/><div className="r-m">Reenvie o código</div></div>
                        <div className="bt-m"><BotaoL nome="Confirmar" /></div>
                    </div>
                </Modal>
                
                <div className="texto">
                    <div className="txt">
                        Digite seu endereço de e-mail abaixo e enviaremos um link para que você possa redefinir sua senha.
                    </div>
                </div>
                <div className="email-inp-bt">
                    <div className="txt1">E-mail:</div>
                    <div className="input"><input type={Number} placeholder="Digite seu e-mail"/></div>
                </div>
                <div className="botao"  onClick={() => setExibirModal({show: true})}>
                    <BotaoL nome="Enviar"/>
                </div>
            </Parte2>
        </Container>
    )
}