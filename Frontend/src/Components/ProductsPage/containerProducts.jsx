import { connect } from 'react-redux';
import TestApi from '../TestApi/TestApi';
import React from 'react';
import TshitrPage from './Tshirt/TshitrPage';
import { getTovars } from "../../redux/ProductsReducer";
import axios from 'axios';
// контейнер для товаров футболки

class ContainerProducts extends React.Component {

    componentDidMount() {
        this.props.getTovars(16,2)
    }
    render() {
        return (
            <div>
                {document.location.pathname === "/short" ? <TshitrPage body={this.props.body} /> : <div>test</div>}
            </div>
        )
    }
}
debugger

const mapStateToProps = function (state) {
    return {
        body: state.products.body,
    }
}

export default connect(mapStateToProps, { getTovars })(ContainerProducts);
