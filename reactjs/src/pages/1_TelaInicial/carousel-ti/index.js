import seta from '../../../assets/img/seta.png'
import { useEffect, useState } from 'react'
import { Container} from './styled';

import Api from '../../../service/api';
const api = new Api();

export default function Carousel(){
    const [filme, setFilme] = useState([]);

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

    async function Listar(){
        let r = await api.ListarCarousel()
        setFilme(r)
    }

    useEffect(() =>{
        Listar()
    },[])

    return(
        <Container>
            <div className="carousel-ti">
                <button className="setaEsquerda" onClick={voltar}>
                    <img src={seta} alt=""/>
                </button>
                <div className="carousel-item">
                    {filme.map((item,i) =>
                        <img src={item.img_maior} alt="" />
                    )}
                </div>
                <button className="setaDireita" onClick={next}>
                    <img src={seta} alt=""/>
                </button>
            </div>
        </Container>
    )
}