import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ItemsProvider } from "./Context/StateProvider.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </BrowserRouter>
);
