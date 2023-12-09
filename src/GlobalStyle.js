import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Manrope', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


ul {
    list-style-type: none;
}

* {
    margin: 0;
    padding: 0;
    color: #121417;
    font-size: 400;
}

a {
  text-decoration: none;
}

.container {
    padding: 15px 10px 15px 10px;
}

img {
  display: block;
}

.like_button {
  position: absolute;
  border: none;
  background-color: rgba(0,0,0,0);
  right: 14px;
  top: 14px;
  width: 18px;
  height: 18px;
}

.like_button:hover {
  transform: scale(1.3);
}
`;
