import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: var(--dark);
    }
  html, body, #root{
      max-height: 100vh;
      max-width: 100vh;
      background: var(--white);
      height: 100%;
      width: 100%;
  }
  *, button, input {
      border: 0;
      background: none;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  html{
    background-color: var(--white);
  }
  :root{
    --primary: #e23636;
    --secondary: #EE1B24;
    --white: #f5f6fa;
    --input: #e23636;
    --dark: #504a4a
    
  }
`;
