import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reza from "./pages/Reza";
import Nelan from "./pages/Nelan";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
