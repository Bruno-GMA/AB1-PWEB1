
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./paginas/Home/home";
import Servicos from "./paginas/Servicos/Servicos";
import Sobre from "./paginas/Sobre/Sobre";




export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </Router>
    </>
  );
}