import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--tect);
  }

  html, border, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background-color: none;
    font-family: Helvetica, sans-serif;

  }

  html {
    background: var(--background)
  }

  :root {
    --background: #fcfcfc;
    --text: #303030;
    --primary: #303030;
    --secondary: #15181C;
    --white: #f0f0f0;
    --gray: #919191;
    --outline: #2F3336;
    --succes: #54a145;
    --error: #c24040;
   
  }
`;
