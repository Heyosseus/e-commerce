import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        flex-direction: column;
        /* width: 100vw; */
        min-height: 100vh;
        background: #F2F2F2;
        font-family: 'Manrope', sans-serif;
        color: #fff;
        outline: none;
    }
    a{
        list-style-type: none;
        text-decoration: none;
        color: white;
    }
`;