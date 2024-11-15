import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Professionals from './Professionals';
import Map from './Map';
import Frontend from './Layouts/FrontEnd';
import Sobre from "./About";

const App = () => {
    return (
        <Router>
            <Frontend>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/profissionais" element={<Professionals />} />
                    <Route path="/localizacao" element={<Map />} />
                </Routes>
            </Frontend>
        </Router>
    );
}
export default App;
