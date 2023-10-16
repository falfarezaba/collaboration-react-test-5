import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nelan from "./pages/Nelan";
import Azka from "./pages/Azka";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nelan" element={<Nelan />} />
        <Route path="/azka" element={<Azka />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
