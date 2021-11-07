import { Geral } from "./styled"


export default function Botao(props) {

    function getPages() {
        let paginas = [];
        for (let i = 1; i <= props.totalPaginas; i++) {
          paginas.push(i);
        }
        return paginas;
    }

    function irPara(pagina) {
        props.onPageChange(pagina);
    }

    return(
        <Geral paginaAtual={props.pagina}>
            {getPages().map(p => 
                <div className="page" onClick={() => irPara(p)}>
                    {p}
                </div>
            )}
        </Geral>
)}

{/* <div><Botao1>1</Botao1></div>
            <div><Botao1>2</Botao1></div>
            <div><Botao1>3</Botao1></div>
            <div className="dif"><Botao1>...</Botao1></div>*/}