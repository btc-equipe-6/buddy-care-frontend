import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;  
  }
  body{
    background: linear-gradient(90deg, rgba(244,244,244,1) 4%, rgba(112,194,187,1) 100%);
  }
  `