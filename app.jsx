import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./Components/ProductDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route
          path="/categories/:category/products/:productId"
          element={<ProductDetailPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
