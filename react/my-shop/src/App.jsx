import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import "./style.css";
function App() {
  return (
    <Routes>
      <Route path="/posts/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
