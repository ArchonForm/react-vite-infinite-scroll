import { createGlobalStyle } from "styled-components"

export const Styles = createGlobalStyle`
:root {
  font-size: 14px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  --text-primary: #4d4d72;
  --background-light: #f8f7f6;
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  color: var(--text-primary);
  background: var(--background-light);
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
`
