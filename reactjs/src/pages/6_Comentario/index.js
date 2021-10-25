import Cabecalho from '../../components/comum/cabecalho';
import Rodape from '../../components/comum/rodapê';
import Conteudo from './conteudo';

import { Container, PartePrin } from './styled';
import { useState, useEffect } from "react";

import Api from '../../1_service/api';
const api = new Api();

export default function Comentarios() {
    const [filme, setFilme] = useState([]);

    async function Listar() {
        let r = await api.ListarC();
        console.log(r);
        setFilme(r);
    }

    useEffect(() => {
        Listar();
    }, []);


    return(
        <Container>
            <Cabecalho/>
            <PartePrin>
                <div className="titulo">Comentários:</div>
                <div className="bloco1">
                    <div className="txt-c">Há muita coisa acontecendo para este tempo de execução e os setpieces são um pouco desanimadores em comparação com as entradas anteriores. Eles poderiam ter pelo menos, feito com que John Cena vencesse aquele grandalhão no final.</div>
                    <div className="excluir"><button>Excluir</button></div>
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