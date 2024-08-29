import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/destination" element={<Destination/>}></Route>
                    <Route path="/crew" element={<Crew/>}></Route>
                    <Route path="/technology" element={<Technology/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;