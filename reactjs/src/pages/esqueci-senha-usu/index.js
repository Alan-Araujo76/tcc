import  LogoeBarra from '../../componentes/tituloEbarra-login'

import { Botoes } from '../entrar-usu/style'
import { Container, Parte2 } from './style'

export default function Esqueci() {
    return(
        <Container>
            <LogoeBarra />

            <Parte2>
                <div className="texto">
                    <div className="txt">
                        Digite seu endereço de e-mail abaixo e enviaremos um link para que você possa redefinir sua senha.
                    </div>
                </div>
                <div className="email-inp-bt">
                    <div className="txt1">E-mail:</div>
                    <div className="input"><input /></div>
                </div>
                <div className="botao">
                    <Botoes>Enviar</Botoes>
                </div>
            </Parte2>
        </Container>
    )
}