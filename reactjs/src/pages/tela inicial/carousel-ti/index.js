import seta from '../../../assets/img/seta.png'
import { useEffect, useState , useRef} from 'react'
import { Container} from './styled';

export default function Carousel(){
    const [filme,setFilme] = useState([]);

    function next() {
        let carousel = document.getElementsByClassName("carousel-item")[0];
        let nextPosition = carousel.scrollLeft + carousel.offsetWidth;

        if (nextPosition > (filme.length * carousel.offsetWidth - carousel.offsetWidth))
            carousel.scrollLeft = 0;
        else 
            carousel.scrollLeft = nextPosition;
        

        //carousel.scrollTo(76*16*2, 0);


    }

    function voltar() {
        let carousel = document.getElementsByClassName("carousel-item")[0];
        let x = carousel.scrollRight - carousel.offsetWidth;

        if (x > (filme.length * carousel.offsetWidth + carousel.offsetWidth))
            carousel.scrollRight = 0;
        else 
            carousel.scrollRight = x;

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