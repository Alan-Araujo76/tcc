import seta from '../../../assets/img/seta.png'
import { useEffect, useState , useRef} from 'react'
import { Container} from './styled';

export default function Carousel(){
    const [filme,setFilme] = useState([]);

    let animando = false;
    function next() {
        if (animando === true)
            return;

        animando = true;

        let carousel = document.getElementsByClassName("carousel-item")[0];
        let nextPosition = carousel.scrollLeft + carousel.offsetWidth;

        if (nextPosition > (filme.length * carousel.offsetWidth - carousel.offsetWidth))
            carousel.scrollLeft = 0;
        else 
            carousel.scrollLeft = nextPosition
        
        window.setTimeout(() => { animando = false; }, 1000);
    }
    
    function voltar() {
        if (animando === true)
            return;

        animando = true;

        let carousel = document.getElementsByClassName("carousel-item")[0];
        let voltar = carousel.scrollLeft - carousel.offsetWidth;
        carousel.scrollLeft = voltar;

        window.setTimeout(() => { animando = false; }, 1000);
    }

    function App(){
        const r = [
            {
                imagem: "https://br.web.img3.acsta.net/newsv7/21/09/04/16/34/5699718.jpg"
            },
            {
                imagem: "https://multiversomais.com/wp-content/uploads/2021/05/MK.jpg"
            },
            {
                imagem: "https://www.gaz.com.br/packages/uploads/2021/08/o-esquadrao-suicida-2-1.jpg"
            },
            {
                imagem: "https://eagoracast.com/wp-content/uploads/2021/07/maligna1-capa.png"
            }
        ]
         setFilme(r);
    }

    useEffect(() =>{
        App()
    },[])

    return(
        <Container>
            <div className="carousel-ti">
                <button className="setaEsquerda" onClick={voltar}>
                    <img src={seta} alt=""/>
                </button>
                <div className="carousel-item">
                    {filme.map((item,i) =>
                        <img key={i} src={item.imagem} alt="" />
                    )}
                </div>
                <button className="setaDireita" onClick={next}>
                    <img src={seta} alt=""/>
                </button>
            </div>
        </Container>
    )
}