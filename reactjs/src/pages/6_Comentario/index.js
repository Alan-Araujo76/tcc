import Cabecalho from '../../components/comum/Cabecalho-Geral';
import Rodape from '../../components/comum/Rodape-Geral';
import Conteudo from './conteudo';

import { Container, PartePrin } from './styled';
import { useState, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../service/api';
const api = new Api();

export default function Comentarios(props) {
    const [filme, setFilme] = useState([]);

    async function ListarU() {
        let r = await api.ListarCU();
        console.log(r);
        setFilme(r);
    }

<<<<<<< HEAD
    const Remove = async (id) => {
        const r = await api.RemoverC(id);
        console.log(r);
=======
    const Remove = async () => {
        const r = await api.RemoverC();

>>>>>>> 964f1b1927e6299aa6655e093049c5af6d256a27
        toast.dark('🗑️ Filme Removido!');
        ListarU();
    }

    useEffect(() => {
        ListarU();
    }, []);


    return(
        <Container>
            <ToastContainer />
            <Cabecalho/>
            <PartePrin>
                <div className="titulo">Comentários:</div>
                <div className="bloco1">
                <div>
                    <div className="txt-c">Há muita coisa acontecendo para este tempo de execução e os setpieces são um pouco desanimadores em comparação com as entradas anteriores. Eles poderiam ter pelo menos, feito com que John Cena vencesse aquele grandalhão no final.</div>
                    <div className="excluir"><button onClick={Remove}>Excluir</button></div>
                </div>
                </div>


                <div className="bloco2">
                    {filme.map(item => 
                        <Conteudo 
                            key={item.id}
                            filmes={item} 
                        />   
                    )}
                </div>

            </PartePrin>

            <Rodape />
        </Container>
    )
}
               //   <Com/>
                 // <div className="linha"><img src={LinhaSep} alt="" /></div>
                //  <Com/>
               //   <div className="linha"><img src={LinhaSep} alt="" /></div>
                //  <Com/>
               //   <div className="linha"><img src={LinhaSep} alt="" /></div>
               //   <Com/>
                //  <div className="linha"><img src={LinhaSep} alt="" /></div>
              //    <Com/>
               //   <div className="linha"><img src={LinhaSep} alt="" /></div>
               //   <Com/>
               //   <div className="linha"><img src={LinhaSep} alt="" /></div>
               ///   <Com/>
               //   <div className="linha"><img src={LinhaSep} alt="" /></div>
               //   <Com/>
              //    <div className="linha"><img src={LinhaSep} alt="" /></div>
              //    <Com/>
              //    <div className="linha"><img src={LinhaSep} alt="" /></div>
             //     <Com/>
              //    <div className="linha"><img src={LinhaSep} alt="" /></div>
               //   <Com/>
              //    <div className="linha"><img src={LinhaSep} alt="" /></div>
               //   <Com/>
               //   <div className="linha"><img src={LinhaSep} alt="" /></div>
               //   <Com/>
               //   <div className="linha"><img src={LinhaSep} alt="" /></div>
                 // <Com/>
                 // <div className="linha"><img src={LinhaSep} alt="" /></div>
                 // <Com/>