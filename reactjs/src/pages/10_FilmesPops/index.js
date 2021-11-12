import Cabecalho from '../../components/comum/Cabecalho-Geral'
import Rodape from '../../components/comum/Rodape-Geral'
import ProxPag from '../../components/comum/ProxPag-Button'
import TituloC from '../../components/comum/titulo'
import { Link } from 'react-router-dom'

import { Container, BlocoC } from './styled.js';

import { useState, useEffect } from 'react'

import Api from '../../service/api';
import axios from 'axios'
const api = new Api();

export default function FilmesGostos(props) {
    const [filme, setFilme] = useState([]);
    const [ pagina, setPagina ] = useState(1);
    const [ totalPaginas, setTotalPaginas ] = useState(0);

    async function Listar() {
        const resp = await axios.get('https://mw-heroku.herokuapp.com/filusu/ja/filmesdif?page=' + pagina);
        console.log(resp);
        setFilme([...resp.data.itens]);
        setTotalPaginas(resp.data.totalPaginas);
    }

    function irPara(pagina) {
        setPagina(pagina);
    }

{ /*   function Detalhes() {
        let ler = Cookies.get('detfilmes');

            ler = ler !== undefined
                ? JSON.parse(ler)
                : [];

        if(ler.some(item => item.id === filme.id) === false) 
            ler.push({...filme, qtd: 1 });
        

        Cookies.set('detfilmes', JSON.stringify(ler))

        navigation.push('/detfilmes');
    }*/}


    useEffect(() => {
        Listar();
      }, [pagina]);

    

    return(
        <Container>
            <Cabecalho/>

            <TituloC nome="Filmes populares"/>  
            
            <div className="filmes" >
                {filme.map(item => 
                   <BlocoC>
                       <div className="filme">
                            <div>
                            <Link to={{ pathname: '/detfilmes', state: item}}>
                                <div className="img"><img src={item.img_menor} alt="" /></div>
                                <div className="nome">{ item.nome != null && item.nome.length >= 25 ?item.nome.substr(0, 25) + '...' : item.nome }</div> 
                            </Link>
                            </div>
                        </div>
                   </BlocoC>
                )}
            </div>

            <div>
                <ProxPag 
                    totalPaginas={totalPaginas}
                    pagina={pagina}
                    onPageChange={irPara}
                />
            </div>
            <Rodape/>
        </Container>
    )
}
