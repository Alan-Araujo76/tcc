import { Container } from './styled.js';
import Cabecalho from '../../components/comum/Cabecalho-Geral'
import Local from '../../assets/img/local.png'; 
import Face from '../../assets/img/face-c.png'; 
import Arroba from '../../assets/img/arroba.png'; 
import Telefone from '../../assets/img/telefone.png'; 

export default function Index() {
    return(
        <Container>
            <Cabecalho />

            <div className="bloco">
                
                <div className="p1">
                    <div className="titulo">Contate-nos</div>
                    <div className="inp1">
                        <input placeholder="Nome"/>
                    </div>
                    <div className="inps">
                        <div><input placeholder="Telefone"/></div>
                        <div><input placeholder="Email"/> </div>
                    </div>
                    <div className="text">
                        <textarea placeholder="Mensagem"/>
                    </div>
                    <div className="btn">
                        <button>Enviar</button>
                    </div>
                </div>

                <div className="p2">
                    <div className="titulo1">Informações</div>
                    <div className="g">
                        <div className="box">
                            <img src={Local} alt="" />
                            <div className="texto"><b>Local:</b> Av. Dona Belmira Marin, 111</div>
                        </div>
                        <div className="box">
                            <img src={Face} alt="" />
                            <div className="texto"><b>Facebook:</b> Movies World</div>
                        </div>
                        <div className="box">
                            <img src={Arroba} alt="" />
                            <div className="texto"><b>E-mail:</b> moviesworldace@gmail.com</div>
                        </div>
                        <div className="box">
                            <img src={Telefone} alt="" />
                            <div className="texto"><b>Contato:</b> +55 11 98120-8919</div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}