import Cabecalho from '../../components/comum/Cabecalho-Geral';
import Rodape from '../../components/comum/Rodape-Geral';
import LinhaSep from '../../assets/img/linha-sep.png';
import Foto from '../../assets/img/foto.png';

import { Link } from 'react-router-dom';


import { Container } from './styled';
import { useEffect, useState } from 'react';
import Modal from '../../components/comum/Modal-Filmes'

import Api from '../../service/api';
const api = new Api();

export default function EditarPerfil() {
    const [ usu, setUsu ] = useState([]);
    const [ alterarUsu, setAlterarUsu ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ genero, setGenero ] = useState('');
    const [ localizacao, setLocalizacao ] = useState('');
    const [ redes, setRedes ] = useState('');
    const [ foto, setFoto ] = useState('');
    const [ exibirModal, setExibirModal ] = useState({show: false});

    async function listar(){
        let r = api.ListarU()
        setUsu(r);
    }

    async function editar(item) {
        setNome(item.nm_usuario);
        setSobrenome(item.nm_sobrenome);
        setUsername(item.nm_username);
        setEmail(item.ds_email);
        setRedes(item.ds_redes_sociais);
        setFoto(item.ds_foto);
        setAlterarUsu(item.id_usuario)
    }

    useEffect(()=>{
        let r = listar();
        let z = usu.map(item => () => editar(item))
        console.log(z)
    }, [])

    async function alterar() {
        let r = api.AlterarU( alterarUsu, nome, sobrenome, username, email, genero, localizacao, redes, foto );
        setAlterarUsu(r);
    }






    return(
        <Container>
            <Cabecalho />

            <Modal options={exibirModal}>
                <div className="geral-m">
                    <div className="txt-m">Insira o código enviado em seu email</div>
                    <div classNama="inp-modal"><input style={{width: '100%', height: '3.5em', padding: '10px'}} placeholder="Digite o código de recuperação" type={Number}/><div className="r-m">Reenvie o código</div></div>
                    <div className="botao"><button>Alterar senha</button></div>
                </div>
            </Modal>

            <div className="titulo">
                <div className="msg-t">Editar Perfil</div>
                <div className="barra-t"><img src={LinhaSep} alt="" /></div>
            </div>

            <div className="parte2-p">
                <div className="parte-inputs">
                    <div className="bloco-inp">
                        <div className="txt-bi">Endereço de email:</div>
                        <div className="inpd"><input value={email} onChange={e => setEmail(e.target.value)}/></div>
                        <div onClick={() => setExibirModal({show: true})}>Alterar senha</div>
                    </div>

                    <div className="bloco-inpd">
                     <div className="dif">
                        <div className="txt-bi">Nome:</div>
                        <div className="inp"><input value={nome} onChange={e => setNome(e.target.value)}/></div>
                     </div>
                     <div className="dif">
                        <div className="txt-bi">Sobrenome:</div>
                        <div className="inp"><input value={sobrenome} onChange={e => setSobrenome(e.target.value)}/></div>
                     </div>
                    </div>

                    <div className="bloco-inpd">
                     <div className="dif">
                        <div className="txt-bi">Username:</div>
                        <div className="inp"><input value={username} onChange={e => setUsername(e.target.value)}/></div>
                     </div>
                     <div className="dif">
                        <div className="txt-bi">Redes sociais</div>
                        <div className="inp"><input value={redes} onChange={e => setRedes(e.target.value)}/></div>
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
                                <option value="Prefiro não dizer">Prefiro não dizer</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="LGBTQI+">LGBTQI+</option>
                            </select>
                        </div>
                     </div>
                    </div>

                    <div className="bloco-inp">
                        <div className="botao"><button onClick={alterar}>Salvar alterações</button></div>
                    </div>
                </div>

                <div className="parte-trocarf">
                <div className="fotoep">
                    { usu.ds_foto == null
                        ? <img src={Foto} alt="" />

                        : <img src={usu.ds_foto} alt="" />
                    }
                </div>
                    <div className="bt-p"><button>Trocar foto</button></div>

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


