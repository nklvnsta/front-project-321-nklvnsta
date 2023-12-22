import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing:border-box
}

    :root {
        --blue: #0c0c0c;
        --theme-light: white;
        --theme-dark: black;
        --text-color: var(--blue);
        --background-color: var(--theme-light);
    }

    body {
        background-color: var(--background-color);
        color: var(--text-color);
        transition: background-color 0.3s, color 0.3s;
    }

    html[data-theme=dark] {
        --background-color: var(--theme-dark);
        --text-color: white;
        color: white;
    }

    .container {
  max-width: calc(2560px + 1.875em);
  margin: 0 auto;
  width: 100%;
  padding-left: 0.9375em;
  padding-right: 0.9375em;
}
`;

export default GlobalStyles;