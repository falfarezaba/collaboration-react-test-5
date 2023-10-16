import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nelan from "./pages/Nelan";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nelan" element={<Nelan />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
