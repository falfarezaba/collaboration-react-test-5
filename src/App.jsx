import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nelan from "./pages/Nelan";
import Helmi from "./pages/Helmi";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nelan" element={<Nelan />} />
                <Route path="/helmi" element={<Helmi/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
