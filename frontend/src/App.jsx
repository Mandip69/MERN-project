import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Sunglasses from "./pages/Sunglasses/Sunglasses";
import EyeGlasses from "./pages/Eyeglasses/EyeGlasses";
import Contactlens from "./pages/contactlens/Contactlens";
import Book from "./pages/book/Book";
import FAQ from "./pages/Faq/FAQ";
import Log from './pages/Login/Log';
// import Sign from "./pages/Sign/Sign";
import Sign from './pages/Sign/Sign';
import AddProducts from '../src/pages/add-products/products';
import Admin from "../src/pages/Admin/admin";
import Admin_View from "../src/pages/Admin/admin_view"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/eyeglasses" element={<EyeGlasses />} />
        <Route path="/contactlens" element={<Contactlens />} />
        <Route path="/book" element={<Book />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Log />} />
        <Route path="/sign" element={<Sign />} /> 
        <Route path="/add-products" element={<AddProducts />} /> 
        <Route path="/admin" element={<Admin />} /> 
        <Route path="/admin-view" element={<Admin_View />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
