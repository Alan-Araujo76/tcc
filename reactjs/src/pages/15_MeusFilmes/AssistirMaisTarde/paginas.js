import styled from "styled-components";

const Container = styled.div`
    display: flex;
    
`;


export default function Pages() {

    function getPages() {
        let paginas = [];
        for (let i = 1; i <= props.totalPaginas; i++) {
          paginas.push(i);
        }
        return paginas;
      }
    


    return(
        <div>
            {getPages().map(p => 
                <div>
                    {p}
                </div>
            )}
        </div>
    )
}