import React from 'react';
import store from "./redux/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer2 from './Components/Footer/Footer2';
import Home from './Components/Home/Home';
import ContainerProducts from './Components/ProductsPage/containerProducts';
import OneProdPageContainer from './Components/ProductsPage/OneProdPage/OneProdPageContainer';
import HeaderContainer from './Components/HeaderNav/HeaderContainer';
import AccountContainer from './Components/Account/AccountContainer';
import ContainerFavorits from './Components/ProductsPage/ContainerFavorits';
import { connect, Provider } from 'react-redux';
import Preloader from './Components/ButtonsFrarment/Preloader';
import { initializeApp } from './redux/appReducer'
import CorzinaContainer from './Components/Corzina/CorzinaContainer';
import Scam from './Components/ButtonsFrarment/Scam';
import WigetYandexContainer from './Components/Decoration/WigetYandexContainer';
import KomuEtoNado from './Components/ButtonsFrarment/KomuEtoNado';
import MatMatveya from './Components/ButtonsFrarment/MatMatveya';

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
                    <Route path="/corzina" element={<CorzinaContainer />} />
                    <Route path="/mat" element={<MatMatveya />} />
                    <Route path="/products/:id" element={<OneProdPageContainer />} />
                    <Route path="/account" element={<AccountContainer />} />
                    <Route path="/decoration" element={<WigetYandexContainer />} />
                    <Route path="/scam" element={<Scam />} />
                    <Route path="/komuJetoNado" element={<KomuEtoNado />} />
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


