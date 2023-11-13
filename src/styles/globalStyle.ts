import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        min-height: 100vh;
        font-family: "Roboto", sans-serif;
    
        margin: 0 auto;
    }

    #root{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        min-width: 37.5rem;
    }
`