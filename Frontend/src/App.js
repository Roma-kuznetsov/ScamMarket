import React from 'react';
import store from "./redux/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer2 from './Components/Footer/Footer2';
import Home from './Components/Home/Home';
import TshitrPage from './Components/ProductsPage/Tshirt/TshitrPage';
import sweat from './images/sweatshirt.jpg'
import ContainerProducts from './Components/ProductsPage/containerProducts';
import OneProdPageContainer from './Components/ProductsPage/OneProdPage/OneProdPageContainer';
import HeaderContainer from './Components/HeaderNav/HeaderContainer';
import AccountContainer from './Components/Account/AccountContainer';
import ContainerFavorits from './Components/ProductsPage/ContainerFavorits';
import { connect, Provider } from 'react-redux';
import Preloader from './Components/ButtonsFrarment/Preloader';
import { initializeApp } from './redux/appReducer'
import CorzinaContainer from './Components/Corzina/CorzinaContainer';
import WigetYandex from './Components/Decoration/WigetYandex';
import Scam from './Components/ButtonsFrarment/Scam';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <HeaderContainer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/tshirt" element={<ContainerProducts type={'tshirt'} />} />
                    <Route path="/hoody" element={<ContainerProducts type={'hoody'} />} />
                    <Route path="/favorits" element={<ContainerFavorits />} />
                    <Route path="/sweat" element={<TshitrPage image={sweat} />} />
                    <Route path="/corzina" element={<CorzinaContainer />} />
                    <Route path="/test" element={<ContainerProducts />} />
                    <Route path="/products/:id" element={<OneProdPageContainer />} />
                    <Route path="/account" element={<AccountContainer />} />
                    <Route path="/decoration" element={<WigetYandex />} />
                    <Route path="/scam" element={<Scam />} />
                </Routes>
                <Footer2 />
            </BrowserRouter>
        )
    }
}
const SamuraiJSApp = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}

const mapStateToProps = (state) => {
    return {
        inProcces: state.auth.inProcces,
        isAuth: state.auth.isAuth,
        initialized: state.app.initialized
    }
}
const AppContainer = connect(mapStateToProps, { initializeApp })(App);

export default SamuraiJSApp;


