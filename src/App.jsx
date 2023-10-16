import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reza from "./pages/Reza";
import Nelan from "./pages/Nelan";
import Wibi from "./pages/Wibi";
import Azka from "./pages/Azka";
import Arwin from "./pages/Arwin";
import Helmi from "./pages/Helmi";
import Dwi from "./pages/Dwi";
import Billy from "./pages/Billy";
import NelanTwoVersion from "./pages/NelanTwoVersion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reza" element={<Reza />} />
        <Route path="/nelan" element={<Nelan />} />
        <Route path="/nelan-two" element={<NelanTwoVersion />} />
        <Route path="/billy" element={<Billy />} />
        <Route path="/wibi" element={<Wibi />} />
        <Route path="/helmi" element={<Helmi />} />
        <Route path="/azka" element={<Azka />} />
        <Route path="/arwin" element={<Arwin />} />
        <Route path="/dwi" element={<Dwi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
