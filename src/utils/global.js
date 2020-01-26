import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Martel|Open+Sans:800&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Martel', serif;
    overflow-x: hidden;
    overflow-y: auto;
  }

  p {
    margin-top: 2em;
    line-height: 1.9;
  }

  h1, h2, h3 {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #333242;
  }

  a {
    color: #ff5200;
  }

  a:hover {
    text-decoration: underline;
  }

  h3 a {
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    font: 800 2rem/1 'Open Sans',sans-serif;
    font-size: 26px;
    text-transform: uppercase;
    color: #34323b;
    margin-bottom: 5rem;
    letter-spacing: -1px;
  }

  main {
    margin-top: 2em;
  }
`
