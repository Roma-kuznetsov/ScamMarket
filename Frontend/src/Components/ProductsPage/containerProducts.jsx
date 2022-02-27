import { connect } from 'react-redux';
import TestApi from '../TestApi/TestApi';
import React from 'react';
import TshitrPage from './Tshirt/TshitrPage';
// контейнер для товаров футболки

class ContainerProducts extends React.Component {
    getLocation() {
        let local = ""
        return (
            local = document.location.pathname
        )
    }
    componentDidMount() {
        console.log(this.getLocation())
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

export default connect(mapStateToProps)(ContainerProducts);
