import LinhaSep from '../../assets/img/linha-sep-tcc.png'

import  LogoeBarra from '../../components/comum/tituloEbarra-login'
import BotaoL from '../../components/styled/botoes-rosa'
import Input from '../../components/styled/inputs-login/cadastrar'
import { Container, Parte2 } from './style'

export default function Cadastro() {
    return(
        <Container>
            <LogoeBarra />

            <Parte2>
                <div className="bloco1">
                    <div className="txt">Dados Pessoais:</div>

                    <div className="inputsss">
                        <div className="sep">
                            <Input nome="Nome:"/>
                            <Input nome="Sobrenome:"/>
                        </div>
                        <div className="sep">
                            <Input nome="Data de nascimento:"/>
                            <Input nome="Gênero:"/>
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

                    <div className="inputsss-d">
                        <Input nome="Data de nascimento:"/>
                        <Input nome="Gênero:"/>
                    </div>
                    
                    <div className="btn"><BotaoL imagem="" nome="Cadastrar"/></div>

                </div>
            </Parte2>
        </Container>
    )
}