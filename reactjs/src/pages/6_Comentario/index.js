import Cabecalho from '../../componentes/comum/cabecalho';
import Rodape from '../../componentes/comum/rodapê';
import Com from '../../componentes/comum/comentario';
import LinhaSep from '../../assets/img/linha-comentario.png';


import { Container, PartePrin } from './styled';

export default function Comentarios() {
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
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                  <div className="linha"><img src={LinhaSep} alt="" /></div>
                  <Com/>
                </div>

            </PartePrin>

            <Rodape />
        </Container>
    )
}