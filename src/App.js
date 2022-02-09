
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer2 from './Components/Footer/Footer2';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import Home from './Components/Home/Home';
import TshitrPage from './Components/ProductsPage/Tshirt/TshitrPage';



const App = () => {
    return (
        <BrowserRouter>  
            <HeaderNav />    
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/short" element={<TshitrPage />} />
            </Routes>
            <Footer2 />
        </BrowserRouter>
    )
}

export default App;

/*<div className="MainDivDark">
            <Home />
        </div>*/
        //<Home />
        //        <TshitrPage />

        /*<Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>*/

