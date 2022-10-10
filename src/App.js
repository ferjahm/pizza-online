import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Product from "./page/Product";
import Error from "./page/Error";
import SingleProduct from "./page/SingleProduct";
import SharedLayout from "./page/SharedLayout";
import CreatAcount from "./page/CreatAcount";
import "./App.css";
import Shop from "./page/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="form" element={<CreatAcount />} />
          <Route path="panier" element={<Shop />} />
          <Route path="product/productId" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
