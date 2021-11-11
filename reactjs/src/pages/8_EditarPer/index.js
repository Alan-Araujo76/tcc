import Cabecalho from '../../components/comum/Cabecalho-Geral';
import Rodape from '../../components/comum/Rodape-Geral';
import LinhaSep from '../../assets/img/linha-sep.png';
import Foto from '../../assets/img/foto.png';

import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

import { Container } from './styled';
import { useState } from 'react';

import Api from '../../service/api';
const api = new Api();

export default function EditarPerfil(props) {
    const [ usu, setUsu ] = useState(props.location.state);
    const [ alterarUsu, setAlterarUsu ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome ] = useState('');
    const [ email, setEmail ] = useState('');
    
    

    async function Alterar() {
        const r = api.AlterarU( nome, sobrenome, email);
        setAlterarUsu(r);
    }



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
                        <div className="txt-bi">Endereço de email:</div>
                        <div className="inpd"><input value={usu.ds_email} readOnly={true}/></div>
                    </div>

                    <div className="bloco-inp" style={{margin: '4em 0em 2em'}}>
                        <div className="txt-bi" >Senha:</div>
                        <div className="inpd"><input type="password" value={usu.ds_senha} readOnly={true}/></div>
                    </div>

                    <div className="bloco-inpd">
                     <div className="dif">
                        <div className="txt-bi">Nome:</div>
                        <div className="inp"><input value={usu.nm_usuario} readOnly={true}/></div>
                     </div>
                     <div className="dif">
                        <div className="txt-bi">Sobrenome:</div>
                        <div className="inp"><input value={usu.nm_sobrenome} readOnly={true}/></div>
                     </div>
                    </div>

                    <div className="bloco-inpd">
                     <div className="dif">
                        <div className="txt-bi">Username:</div>
                        <div className="inp"><input value={usu.nm_username} readOnly={true}/></div>
                     </div>
                     <div className="dif">
                        <div className="txt-bi">Redes sociais</div>
                        <div className="inp"><input value={usu.ds_redes_sociais} readOnly={true}/></div>
                     </div>
                    </div>
    

                    <div className="bloco-inpd">
                    <div className="dif">
                        <div className="txt-bi">Localização:</div>
                        <div className="ordenar">
                            <select>
                                <option value="Feminino">Prefiro não dizer</option>
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RR">RR</option>
                                <option value="RO">RO</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>
                        </div>
                     </div>
                     <div className="dif">
                        <div className="txt-bi">Sexo:</div>
                        <div className="ordenar">
                            <select>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="LGBTQI+">outro</option>
                            </select>
                        </div>
                     </div>
                    </div>

                    <div className="bloco-inp">
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


