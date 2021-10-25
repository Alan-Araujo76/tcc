import seta from '../../../assets/img/seta.png'
import { useEffect, useState , useRef} from 'react'
import { Container} from './styled';

export default function Carousel(){
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
            },
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

    return(
        <Container>
            <div className="carousel-ti">
                <button className="setaEsquerda">
                    <img src={seta} alt=""/>
                </button>
                <div className="carousel-item">
                    {filme.map(item =>
                        <img src={item.imagem} alt="" />
                    )}
                </div>
                <button className="setaDireita">
                    <img src={seta} alt=""/>
                </button>
            </div>
        </Container>
    )
}