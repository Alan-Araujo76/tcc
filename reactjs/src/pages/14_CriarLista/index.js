
import Cabecalho from '../../components/comum/cabecalho'
import Rodape from '../../components/comum/rodapê'

import Copiar from '../../assets/img/copiar.png'

import { Container } from './styled';


export default function CriarLista() {
    return(
        <Container>
            <Cabecalho/>
            <div className="geral">
                <div className="titulo">Criar lista</div>
                <div className="conteudo">
                    <div className="parte-1">
                        <div className="g">
                            <div className="nome-d">Nome:</div>
                            <div className="inp"><input /></div>
                        </div>
                        
                        <div className="g-0">
                            <div className="nome-d">Link:</div>
                        <div className="g-1">
                            <input type="text"/>
                            <button><img src={Copiar} alt="" /></button>
                        </div>
                        </div>

                        <div className="g-d">
                            <div className="nome"><button>Procurar Filme</button></div>
                            <div className="inp-2"><input placeholder="Digite o nome do filme"/></div>
                        </div>
                    </div>
                    <div className="parte-2">
                        <div className="bloco-t">
                            <div className="nome">Descrição:</div>
                            <div className="text"><textarea /></div>
                        </div>
                        <div className="botao"><button>Criar lista</button></div>
                    </div>
                </div>
            </div>
            <Rodape />
        </Container> 
    )
}