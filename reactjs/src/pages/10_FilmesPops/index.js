import Cabecalho from '../../components/comum/Cabecalho-Geral'
import Rodape from '../../components/comum/Rodape-Geral'
import ProxPag from '../../components/comum/ProxPag-Button'
import TituloC from '../../components/comum/titulo'
import Modal from '../../components/comum/Modal-Filmes'

import eu from '../../assets/img/eu.jpg';

import Cookies from 'js-cookie';

import { Container, BlocoC } from './styled.js';

import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import Api from '../../service/api';
import axios from 'axios'
const api = new Api();

export default function FilmesGostos(props) {
    const [filme, setFilme] = useState([]);
    const [exibirModal, setExibirModal] = useState({show: false});
    const [ pagina, setPagina ] = useState(1);
    const [ totalPaginas, setTotalPaginas ] = useState(0);

    const navigation = useHistory();

    async function Listar() {
        const resp = await axios.get('http://localhost:3030/filusu/ja/filmesdif?page=' + pagina);
        console.log(resp);
        setFilme([...resp.data.itens]);
        setTotalPaginas(resp.data.totalPaginas);
    }

    function irPara(pagina) {
        setPagina(pagina);
    }

    function Detalhes() {
        let ler = Cookies.get('detfilmes');

            ler = ler !== undefined
                ? JSON.parse(ler)
                : [];

        if(ler.some(item => item.id === filme.id) === false) 
            ler.push({...filme, qtd: 1 });
        

        Cookies.set('detfilmes', JSON.stringify(ler))

        navigation.push('/detfilmes');
    }


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
                    <Modal options={exibirModal}>
                        <div className="geral-m">
                            <div className="p1-m">
                                <div className="img-m"><img src={item.img_menor} alt="" /></div>
                                <div className="nome-m" title={ item.nome != null && item.nome.length > 25? item.nome : null }>{ item.nome != null && item.nome.length >= 25 ?item.nome.substr(0, 25) + '..' : item.nome }</div>
                            </div>
                            <div className="sep"></div>
                            <div className="p2">
                                <div className="sub-m"><b>Diretor:</b> {item.diretor}</div>
                                <div className="sub-m"><b>Descrição:</b> { item.descricao != null && item.descricao.length >= 105 ?item.descricao.substr(0, 105) + '...' : item.descricao }</div>
                                <div className="sub2-m"><b>Plataformas:</b> {item.plataforma}</div>
                                <div className="botao"><button onClick={Detalhes}>Ver mais</button></div>
                            </div>
                        </div>
                    </Modal>
                    
                    <div className="filme">
                        {Array.length !== 0
                            ? <div onClick={() => setExibirModal({show: true})}>
                                <div className="img"><img src={item.img_menor} alt="" /></div> 
                                <div className="nome" title={ item.nome != null && item.nome.length > 25? item.nome : null }>{ item.nome != null && item.nome.length >= 25 ?item.nome.substr(0, 25) + '...' : item.nome }</div>
                            </div>
        
                            : <div><img src={eu} alt="" /><div>Você ainda não inseriu nenum filme</div></div> 
                        }
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
