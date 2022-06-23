import { createGlobalStyle } from "styled-components";

//Cria estilizacao em CSS padronizada para todos os arquivos do projeto, podendo ser alterada livremente dentro das `` como em CSS

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

hmtl, body, #root{
    min-height: 100%
}

body{
    font-size: 14px;
    -webkit-font-smoothing: antialiazing !important; /*prioriza a propriedade caso o navegador tente sobrepor*/
}

body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Helvetica;
}

button{
    cursor: pointer;
}

`;