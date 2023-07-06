import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { StyleSheetManager } from "styled-components"
import { Styles } from "./shared/config/styles/global.styles.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StyleSheetManager shouldForwardProp={() => true}>
    <BrowserRouter>
      <App />
      <Styles />
    </BrowserRouter>
  </StyleSheetManager>
)
