
import Cabecalho from '../../componentes/cabecalho'
import Rodape from '../../componentes/rodapê'

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
                        
                        <div className="g-d">
                            <div className="nome"><button>Procurar filme</button></div>
                            <div className="inp"><input/></div>
                        </div>

                        <div className="g-d">
                            <div className="nome"><button>Gerar link</button></div>
                            <div className="inp"><input/></div>
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