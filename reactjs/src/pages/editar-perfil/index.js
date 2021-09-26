import Cabecalho from '../../componentes/cabecalho';
import Rodape from '../../componentes/rodapê';
import LinhaSep from '../../assets/img/linha-sep.png';
import Foto from '../../assets/img/foto.png';


import { Container } from './styled';


export default function EditarPerfil() {
    return(
        <Container>
            <Cabecalho />

            <div className="titulo">
                <div className="msg-t">Editar Perfil</div>
                <div className="barra-t"><img src={LinhaSep} alt="" /></div>
            </div>

            <div className="parte2-p">
                <div className="parte-inputs">
                    <div className="bloco-inp">
                        <div className="txt-bi">Username:</div>
                        <div className="inpd"><input /></div>
                    </div>

                    <div className="bloco-inpd">
                     <div className="dif">
                        <div className="txt-bi">Nome:</div>
                        <div className="inp"><input /></div>
                     </div>
                     <div className="dif">
                        <div className="txt-bi">Sobrenome:</div>
                        <div className="inp"><input /></div>
                     </div>
                    </div>

                    <div className="bloco-inp">
                        <div className="txt-bi">Endereço de email:</div>
                        <div className="inpd"><input /></div>
                    </div>

                    <div className="bloco-inpd">
                    <div className="dif">
                        <div className="txt-bi">Localização:</div>
                        <div className="inp"><input /></div>
                     </div>
                     <div className="dif">
                        <div className="txt-bi">Sexo:</div>
                        <div className="inp"><input /></div>
                     </div>
                    </div>

                    <div className="bloco-inp">
                        <div className="txt-bi">Redes sociais</div>
                        <div className="inpd"><input /></div>
                        <div className="botao"><button>Salvar alterações</button></div>
                    </div>
                </div>

                <div className="parte-trocarf">
                    <div className="img-perfil"><img src={Foto} alt=""/></div>
                    <div className="bt-p"><button>Trocar foto </button></div>

                    <div className="bloco-inp">
                    <div className="txt-b">Bio: </div>
                        <div className="textarea"><textarea /></div>
                    </div>
                </div>
            </div>
            <Rodape />
        </Container>
    )
}


