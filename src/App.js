import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTES
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Detalle from "./pages/Detalle";
import CategoryItemList from "./pages/CategoryItemList";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<CategoryItemList />} />
            <Route path="/item/:id" element={<Detalle />} />
            <Route path="/cart" element= {<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
