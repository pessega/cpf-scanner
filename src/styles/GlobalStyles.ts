import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--text);
    
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
    font-family: 'Inter', Helvetica, sans-serif;
    color: var(--text);
    font-size: 1rem;
    
  }
  
  html {
    background: var(--background)
  }
  
  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  h1{
    font-size: 26px;
    margin-bottom: 20px;
  }
  
  :root {
    --background: #0E1523;
    --header: #112649;
    --text: #D6DCE5;
    --primary: #303030;
    --secondary: #15181C;
    --white: #f0f0f0;
    --blue: #6F8EBF;
    --light-gray: #8B9AB0;
    --dark-gray: #4E5D73;
    --outline: #0C74FA;
    --succes: #54a145;
    --error: #E86363;
   
  }

 
`;
