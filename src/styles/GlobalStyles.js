import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: var(--white);
    }
  html, body, #root{
      max-height: 100vh;
      max-width: 100vh;
      background:  #f5f6fa;
      height: 100%;
      width: 100%;
  }
  *, button, input {
      border: 0;
      background: none;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  html{
      background: var(--primary);
  }
  :root{
    --primary: #ED1B24;
    --secondary: #EE1B24;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    
  }
`;
