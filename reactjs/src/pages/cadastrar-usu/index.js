import LinhaSep from '../../assets/img/linha-sep-tcc.png'

import  LogoeBarra from '../../componentes/tituloEbarra-login'
import { Botoes } from '../entrar-usu/style'
import { Container, Parte2 } from './style'

export default function() {
    return(
        <Container>
            <LogoeBarra />

            <Parte2>
                <div className="bloco1">
                    <div className="txt">Dados Pessoais:</div>

                    <div className="bloco-inp"> 
                     <div className="inp">
                      <div className="txt-1">Nome: </div>  
                      <div className="input"><input/></div>
                     </div>

                     <div className="inp">
                      <div className="txt-1">Sobrenome: </div>  
                      <div className="input"><input/></div>
                     </div>
                    </div>

                    <div className="bloco-inp"> 
                     <div className="inp">
                      <div className="txt-1">Data de nascimento: </div>  
                      <div className="input"><input/></div>
                     </div>
                     <div className="inp">
                      <div className="txt-1">Genêro: </div>  
                      <div className="input"><input/></div>
                     </div>
                    </div>
                </div>

                <div className="barra"><img src={LinhaSep} alt="" /></div>

                <div className="bloco2">
                    <div className="txt">Dados Login:</div>

                    <div className="bloco-inp"> 
                     <div className="inp">
                        <div className="txt-d">Email: </div>  
                        <div className="input-d"><input/></div>
                     </div>
                    </div>

                    <div className="bloco-inp">
                     <div className="inp"> 
                        <div className="txt-1">Sobrenome: </div>  
                        <div className="input"><input/></div>
                     </div>
                     <div className="inp">
                        <div className="txt-1">Senha: </div>  
                        <div className="input"><input/></div>
                     </div>
                    </div>
                    <div><Botoes>Cadastre-se</Botoes></div>

                </div>
            </Parte2>
        </Container>
    )
}