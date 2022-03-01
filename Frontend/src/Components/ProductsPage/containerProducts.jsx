import { connect } from 'react-redux';
import TestApi from '../TestApi/TestApi';
import React from 'react';
import TshitrPage from './Tshirt/TshitrPage';
import { getTovars, setCurrentPage } from "../../redux/ProductsReducer";
import axios from 'axios';
// контейнер для товаров футболки

class ContainerProducts extends React.Component {

    componentDidMount() {
        this.props.getTovars(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getTovars(pageNumber, this.props.pageSize);
    }
    render() {
        return (
            <div>
                {document.location.pathname === "/short" ? <TshitrPage body={this.props.body}
                    onPageChanged={this.onPageChanged}
                    totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.props.setCurrentPage} />
                    : <div>test</div>}
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    return {
        body: state.products.body,
        currentPage: state.products.currentPage,
        pageSize: state.products.pageSize,
        totalItemsCount: state.products.totalItemsCount
    }
}

export default connect(mapStateToProps, { getTovars, setCurrentPage })(ContainerProducts);
