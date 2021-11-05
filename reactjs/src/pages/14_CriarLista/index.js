import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cabecalho from '../../components/comum/Cabecalho-Geral'
import Rodape from '../../components/comum/Rodape-Geral'

import Copiar from '../../assets/img/copiar.png'

import { Container } from './styled';
import { useEffect, useState } from 'react';

import Api from '../../service/api';
const api = new Api();

export default function CriarLista() {
    const [lista, setLista] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ setFilme ] = useState([]);
    const [ setListas ] = useState([]);

    async function listar() {
        let r = await api.ListarLis();
        setListas(r);
    }

    async function listarFilmes() {
        let r = await api.ListarF();
        setFilme(r);
    }

    async function inserirLista() {
        if(lista && descricao) {
            let r = await api.InserirLis(lista, descricao);
            if (r.erro) 
                    toast.dark(r.erro);
                else 
                    toast.dark('Lista criada!');
        } else {
            let r = await api.AlterarLis(lista, descricao);
            if (r.erro)
                toast.dark(r.erro);
            else 
                toast.dark('Lista alterada!');
        }
    }

    useEffect(() => {
        listar();
    }, );

    return(
        <Container>
            <ToastContainer />
            <Cabecalho/>
            <div className="geral">
                <div className="titulo">Criar lista</div>
                <div className="conteudo">
                    <div className="parte-1">
                        <div className="g">
                            <div className="nome-d">Nome:</div>
                            <div className="inp"><input type="text" value={lista} onChange={e => setLista(e.target.value)} /></div>
                        </div>
                        
                        <div className="g-0">
                            <div className="nome-d">Link:</div>
                        <div className="g-1">
                            <input type="text"/>
                            <button><img src={Copiar} alt="" /></button>
                        </div>
                        </div>

                        <div className="g-d">
                            <div className="nome"><button onClick={listarFilmes}>Procurar Filme</button></div>
                            <div className="inp-2"><input placeholder="Digite o nome do filme"/></div>
                        </div>
                    </div>
                    <div className="parte-2">
                        <div className="bloco-t">
                            <div className="nome">Descrição:</div>
                            <div className="text"><textarea value={descricao} onChange={e => setDescricao(e.target.value)}/></div>
                        </div>
                        <div className="botao"><button onClick={inserirLista}>Criar lista</button></div>
                    </div>
                </div>
            </div>
            <Rodape />
        </Container> 
    )
}