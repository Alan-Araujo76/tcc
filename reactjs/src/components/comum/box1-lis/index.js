import { BlocoC } from "./styled"
import Capa from '../../../assets/img/capa-filme.png'
import Mais from '../../../assets/img/mais.png'

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import Api from '../../../service/api';
const api = new Api();

export default function BoxFil() {
    const [filme, setFilme] = useState([]);
    console.log(filme);

    async function Listar() {
        let r = await api.ListarLis();
        console.log(r);
        setFilme(r);
    }

    useEffect(() => {
        Listar();
    }, []);


    return(
        <BlocoC>
            <div className="filme-d">
                <Link to="/listafil">
                    <div className="img-fil">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="img"><img src={Capa} alt="" /></div>
                    </div>
                    <div className="nome">Velozes e Furiosos 9</div>
                </Link>
            </div>
            
            <div className="filme-b">
                <Link to="/criarlist">
                    <div className="botao"><button><img src={Mais} alt=""/></button></div>
                </Link>
                <div className="desc-botao"> CRIAR LISTA</div>
            </div>

            <div className="filme">
                <Link to="/listafil">
                    <div className="img-fil">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="img"><img src={Capa} alt="" /></div>
                    </div>
                </Link>
                <div className="nome">Velozes e Furiosos 9</div>
            </div>

            <div className="filme">
                <div className="img-fil">
                    <div className="img"><img src={Capa} alt="" /></div>
                    <div className="img"><img src={Capa} alt="" /></div>
                    <div className="img"><img src={Capa} alt="" /></div>
                </div>
                <div className="nome">Velozes e Furiosos 9</div>
            </div>
        </BlocoC>
    )
}