import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import { StyleSheetManager } from "styled-components"
import { Styles } from "./shared/config/styles/global.styles.tsx"
import { client } from "./shared/api/queryClient.ts"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StyleSheetManager shouldForwardProp={() => true}>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
        <Styles />
      </BrowserRouter>
    </QueryClientProvider>
  </StyleSheetManager>
)
