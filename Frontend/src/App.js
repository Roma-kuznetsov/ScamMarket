
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Corzina from './Components/Corzina/Corzina';
import Footer2 from './Components/Footer/Footer2';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import Home from './Components/Home/Home';
import TshitrPage from './Components/ProductsPage/Tshirt/TshitrPage';
import sweat from './images/sweatshirt.jpg'
import ContainerProducts from './Components/ProductsPage/containerProducts';
import OneProdPageContainer from './Components/ProductsPage/OneProdPage/OneProdPageContainer';
import { useDispatch } from 'react-redux';
import { autoAuth } from './api';







const App = () => {


    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(autoAuth())
    },[])
    


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
                <Route path="/products/:id" element={<OneProdPageContainer />} />
            </Routes>
            <Footer2 />
        </BrowserRouter>
    )
}

export default App;

//<Route path="*" element={} /> not found


