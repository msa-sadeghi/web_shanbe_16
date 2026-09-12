import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail";

import Layout from "./components/Layout";
import "./style.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/posts/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
