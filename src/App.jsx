import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nelan from "./pages/Nelan";
import Arwin from "./pages/Arwin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nelan" element={<Nelan />} />
        <Route path="/arwin" element={<Arwin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
