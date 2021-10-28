import { Container } from './styled';
import BoxFilme from './box-filme-ti/index';
import 'react-multi-carousel/lib/styles.css';


import Cabecalho from '../../components/comum/cabecalho';
import Rodape from '../../components/comum/rodapê';

import ComentariosTi from './comentario-box-ti/index';
import ListaTi from './listas-box-ti/index';
import Carousel from './carousel-ti';

import Api from '../../1_service/api';
const api = new Api();

export default function TelaInicial(){

    return(
        <Container>
            <Cabecalho/>
            <div className="conteiner-ti">
                
                    <Carousel/>
               
                <div className="titulo-ti">Acompanhe tudo sobre filmes</div>
                <div className="subTitulo-ti">A rede social para amantes de cinema</div>
                <div className="conteudo-box-ti">
                    <div className="titulo-box-ti">Filmes populares:</div>
                    <div className="box-filmes-ti">
                        <BoxFilme/>
                    </div>
                </div>
                <div className="conteudo-cl-ti">
                    <div className="comentarios-ti">
                        <div className="titulo-cl-ti">
                            CRÍTICAS POPULARES ESTA SEMANA
                        </div>
                        <hr/>
                        <ComentariosTi/>
                        <ComentariosTi/>
                        <ComentariosTi/>
                    </div>
                    <div className="listas-ti">
                        <div className="titulo-l-ti">
                            LISTAS POPULARES
                        </div>
                        <hr/>
                        <div className="listas-box-ti">
                            <ListaTi/>
                            <hr/>
                            <ListaTi/>
                            <hr/>
                            <ListaTi/>
                            <button><div>ver todas as listas</div></button>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape/>
        </Container>
        
    )
}
