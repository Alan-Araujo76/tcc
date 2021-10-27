import Cabecalho from '../../components/comum/cabecalho'
import Rodape from '../../components/comum/rodapê'
import ProxPag from '../../components/comum/botao-prox-pag'
import TituloC from '../../components/comum/titulo'
import Filmes from '../../components/comum/box-fil_D';

import { Container } from './styled.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react'
import Api from '../../1_service/api';
const api = new Api();

export default function FilmesGostos() {
    const [filme, setFilme] = useState([]);
    const [exibirModal, setExibirModal] = useState({show: false});

    async function Listar() {
        let r = await api.ListarF();
        console.log(r);
        setFilme(r);
    }

    const onFRemove = async (id) => {
        const r = await api.RemoverF(id);
        toast.dark('🗑️ Filme Removido!');
        
        Listar();
    }

    useEffect(() => {
        Listar();
      }, []);

    

    return(
        <Container>
            <ToastContainer />
            <Cabecalho/>

            <TituloC nome="Filmes populares"/>  
            
            <div className="filmes" >
                {filme.map(item => 
                    <Filmes 
                    key={item.id}
                    filmes={item} 
                    onRemove={onFRemove}
                    />   
                )}
            </div>

            <ProxPag/>


            <Rodape/>
        </Container>
    )
}

