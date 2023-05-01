import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';
import Account from './components/Account';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CreateAccountPage from "./components/NewAccount";
import ProductDetailPage from "./components/ProductDetailPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/createnew" element={<CreateAccountPage/>} />
          <Route path="/product/:productId" element={<ProductDetailPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
