
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Corzina from './Components/Corzina/Corzina';
import Footer2 from './Components/Footer/Footer2';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import Home from './Components/Home/Home';
import TshitrPage from './Components/ProductsPage/Tshirt/TshitrPage';
import short from './images/git_hube.jpg'
import sweat from './images/sweatshirt.jpg'
import ContainerProducts from './Components/ProductsPage/containerProducts';



const App = () => {
    return (
        <BrowserRouter>  
            <HeaderNav />    
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/short" element={<ContainerProducts />} />
                <Route path="/sweat" element={<TshitrPage image = {sweat}/>} />
                <Route path="/corzina" element={<Corzina />} />
                <Route path="/test" element={<ContainerProducts />} />
            </Routes>
            <Footer2 />
        </BrowserRouter>
    )
}

export default App;



