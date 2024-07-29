import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./Context/CartProvider/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./Context/LoginProvider/index.jsx";
import { ColorProvider } from "./Context/ColorContext/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ColorProvider>
      <LoginProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LoginProvider>
    </ColorProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
