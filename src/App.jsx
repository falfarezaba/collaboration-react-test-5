import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nelan from "./pages/Nelan";
import Dwi from "./pages/Dwi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nelan" element={<Nelan />} />
        <Route path="/dwi" element={<Dwi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
