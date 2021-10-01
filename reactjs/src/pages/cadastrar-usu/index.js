import LinhaSep from '../../assets/img/linha-sep-tcc.png'

import  LogoeBarra from '../../componentes/tituloEbarra-login'
import { Botoes } from '../entrar-usu/style'
import { Container, Parte2 } from './style'

export default function Cadastro() {
    return(
        <Container>
            <LogoeBarra />

            <Parte2>
                <div className="bloco1">
                    <div className="txt">Dados Pessoais:</div>

                    <div className="bloco-inp"> 
                     <div className="inp">
                      <div className="txt-1">Nome: </div>  
                      <div className="input"><input placeholder="Digite seu nome"/></div>
                     </div>

                     <div className="inp">
                      <div className="txt-1">Sobrenome: </div>  
                      <div className="input"><input placeholder="Digite seu sobrenome"/></div>
                     </div>
                    </div>

                    <div className="bloco-inp"> 
                     <div className="inp">
                      <div className="txt-1">Data de nascimento: </div>  
                      <div className="input"><input  placeholder="Digite sua data de nascimento"/></div>
                     </div>
                     <div className="inp">
                      <div className="txt-1">Genêro: </div>  
                      <div className="input"><input placeholder="Digite seu genêro"/></div>
                     </div>
                    </div>
                </div>

                <div className="barra"><img src={LinhaSep} alt="" /></div>

                <div className="bloco2">
                    <div className="txt">Dados Login:</div>

                    <div className="bloco-inp"> 
                     <div className="inp">
                        <div className="txt-d">E-mail: </div>  
                        <div className="input-d"><input  placeholder="Digite seu e-mail"/></div>
                     </div>
                    </div>

                    <div className="bloco-inp">
                     <div className="inp"> 
                        <div className="txt-1">Senha: </div>  
                        <div className="input"><input  placeholder="Digite sua senha"/></div>
                     </div>
                     <div className="inp">
                        <div className="txt-1">Confirme sua senha: </div>  
                        <div className="input"><input  placeholder="Digite sua senha novamente"/></div>
                     </div>
                    </div>
                    <div className="btn"><Botoes>Cadastre-se</Botoes></div>

                </div>
            </Parte2>
        </Container>
    )
}