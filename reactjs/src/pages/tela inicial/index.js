import { Container } from './styled';
import BoxFilme from './box-filme-ti/index';
import 'react-multi-carousel/lib/styles.css';
import seta from '../../assets/img/seta.png'
import { useEffect, useState , useRef} from 'react'

import Cabecalho from '../../componentes/comum/cabecalho';
import Rodape from '../../componentes/comum/rodapê';

import ComentariosTi from './comentario-box-ti/index';
import ListaTi from './listas-box-ti/index';

export default function TelaInicial(){
    const [filme,setFilme] = useState([]);
    const carousel = useRef(null);

    function App(){
        const r = [
            {
                imagem: "https://multiversomais.com/wp-content/uploads/2021/05/MK.jpg"
            },
            {
                imagem: "https://br.web.img3.acsta.net/newsv7/21/09/04/16/34/5699718.jpg"
            },
            {
                imagem: "https://www.gaz.com.br/packages/uploads/2021/08/o-esquadrao-suicida-2-1.jpg"
            },
            {
                imagem: "https://oretalho.com.br/wp-content/uploads/2021/06/2021-06-24-capa-cinema-velozes-e-furiosos-9.jpg"
            }
        ]
         setFilme(r);
    }


    const SetaDireira = (e) => {
        
        carousel.current.scrolRight = carousel.current.scrollRight + carousel.current.offsetWidth;
    }
    
    const setaEsquerda = (e) => {
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft = carousel.current.scrollLeft - carousel.current.offsetWidth;
    }

    useEffect(() =>{
        App();
    }, [])
    return(
        <Container>
            <Cabecalho/>
            <div className="conteiner-ti">
                
                    <div className="carousel-ti">
                        <button onClick={setaEsquerda} className="setaEsquerda">
                            <img src={seta} alt=""/>
                        </button>
                        <div className="carousel-item" ref={carousel}>
                            {filme.map((item) => {
                                return(<img src={item.imagem} alt="" />);
                            })}
                        </div>
                        <button onClick={SetaDireira} className="setaDireita">
                            <img src={seta} alt=""/>
                        </button>
                    </div>
               
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
