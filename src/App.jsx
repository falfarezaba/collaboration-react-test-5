import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reza from "./pages/Reza";
import Nelan from "./pages/Nelan";
<<<<<<< HEAD
import Arwin from "./pages/Arwin";
import Helmi from "./pages/Helmi";
=======
import Dwi from "./pages/Dwi";
>>>>>>> 49ad6e7202ec674ee1549e7fe046fb72bc5a82ab
import Billy from "./pages/Billy";
import Helmi from "./pages/Helmi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reza" element={<Reza />} />
        <Route path="/nelan" element={<Nelan />} />
<<<<<<< HEAD
        <Route path="/arwin" element={<Arwin />} />
        <Route path="/helmi" element={<Helmi />} />
        <Route path="/billy" element={<Billy />} />
=======
        <Route path="/helmi" element={<Helmi />} />
        <Route path="/billy" element={<Billy />} />
        <Route path="/dwi" element={<Dwi />} />
>>>>>>> 49ad6e7202ec674ee1549e7fe046fb72bc5a82ab
      </Routes>
    </BrowserRouter>
  );
}

export default App;
