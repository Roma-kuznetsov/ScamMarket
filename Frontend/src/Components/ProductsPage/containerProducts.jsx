import { connect } from 'react-redux';
import React from 'react';
import TshitrPage from './Tshirt/TshitrPage';
import { getTovars, setCurrentPage, setItem } from "../../redux/ProductsReducer";
import { addFavThunk } from "../../redux/authReducer"

// контейнер для товаров футболки

class ContainerProducts extends React.Component {

    componentDidMount() {
        this.props.getTovars(1, this.props.pageSize, this.props.type)
        window.scrollTo(0,300)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.props.getTovars(this.props.currentPage, this.props.pageSize, this.props.type)
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.getTovars(pageNumber, this.props.pageSize,this.props.type);
    }

    render() {
        return (
            <div>
                <TshitrPage body={this.props.body}
                    onPageChanged={this.onPageChanged}
                    totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.props.setCurrentPage}
                    favorites={this.props.favorites}
                    addFavThunk={this.props.addFavThunk}
                    idUser={this.props.idUser}
                    isFaching={this.props.isFaching}
                    inProcces={this.props.inProcces}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        body: state.products.body,
        currentPage: state.products.currentPage,
        pageSize: state.products.pageSize,
        totalItemsCount: state.products.totalItemsCount,
        selectedItem: state.products.selectedItem,
        favorites: state.auth.profile.like,
        idUser: state.auth.profile.id,
        isFaching:state.products.isFaching,
        inProcces:state.auth.inProcces
    }
}


export default connect(mapStateToProps, { getTovars, setCurrentPage, setItem, addFavThunk })(ContainerProducts);
