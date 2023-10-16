import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nelan from "./pages/Nelan";
import Wibi from "./pages/Wibi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nelan" element={<Nelan />} />
        <Route path="/wibi" element={<Wibi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
