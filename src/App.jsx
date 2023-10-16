import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reza from "./pages/Reza";
import Nelan from "./pages/Nelan";
import Arwin from "./pages/Arwin";
import Helmi from "./pages/Helmi";
import Billy from "./pages/Billy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reza" element={<Reza />} />
        <Route path="/nelan" element={<Nelan />} />
        <Route path="/arwin" element={<Arwin />} />
        <Route path="/helmi" element={<Helmi />} />
        <Route path="/billy" element={<Billy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
