import Cabecalho from '../../componentes/comum/cabecalho'
import Rodape from '../../componentes/comum/rodapê'
import ProxPag from '../../componentes/comum/botao-prox-pag'
import TituloC from '../../componentes/comum/titulo'
import Filmes from '../../componentes/comum/box-fil';

import { Container } from './styled.js';

import { useState, useEffect } from 'react'
import Api from '../../1_service/api';
const api = new Api();

export default function FilmesGostos() {
    const [filme, setFilme] = useState([]);

    async function Listar() {
        let r = await api.ListarFG();
        console.log(r);
        setFilme(r);
    }

    useEffect(() => {
        Listar();
      }, []);

    return(
        <Container>
            <Cabecalho/>

            <TituloC nome="Filmes populares"/>  
            
            <div className="filmes">
                {filme.map(item => 
                    <Filmes 
                    key={item.id}
                    filmes={item} />   
                )}
            </div>

            <ProxPag/>


            <Rodape/>
        </Container>
    )
}
//import Modal from '../10_FilmesPops/modal';

//const [exibirModal, setExibirModal] = useState(false);

//<Modal show={exibirModal}>
//<div>
//    <h1>Sou</h1>
//</div>
//</Modal>
//<button onClick={() => setExibirModal(true)} style={{cursor: "pointer"}}></button>