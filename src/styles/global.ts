import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Arya:wght@400;700&display=swap');

    :root{
        --primary: #0E7069;
        --secondary: #19BDB2;
        --tertiary: #51BDB6;

        // #3A8782 / / #083D3A
    
        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arya', sans-serif;

    }

    body {
        width: 100vw;
        height: 100vh;
        position: relative;
        background-color: var(--primary);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol, li{
        list-style: none;
    }

    input{
        outline: none;
        border: none;
        padding-left: 0.625rem;
    }

    @media (min-width: 900px){
        main{
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            /* margin-top: 0.625rem;
            gap: 2.8125rem; */
        }
    }

`;
