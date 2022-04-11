import { connect } from 'react-redux';
import React from 'react';
import TshitrPage from './Tshirt/TshitrPage';
import { setCurrentPage, setItem, getFavorits } from "../../redux/ProductsReducer";
import { addFavThunk } from "../../redux/authReducer"
import { Navigate } from "react-router-dom"


class ContainerProducts extends React.Component {

    componentDidMount() {
        if (this.props.isAuth) {
            this.props.getFavorits(this.props.userId, 1, this.props.pageSize)
            window.scrollTo(0,300)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth !== prevProps.isAuth || this.props.favorites !== prevProps.favorites) {
            this.props.getFavorits(this.props.userId, this.props.currentPage, this.props.pageSize)
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.getFavorits(this.props.userId, pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber)
        
    }

    render() {
        return (
            <div>
                {this.props.isAuth ?
                    <TshitrPage body={this.props.body}
                        idUser={this.props.userId}
                        favorites={this.props.favorites}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        totalItemsCount={this.props.totalItemsCount}
                        addFavThunk={this.props.addFavThunk}
                        setCurrentPage={this.props.setCurrentPage}
                        setItem={this.props.setItem}
                        onPageChanged={this.onPageChanged}
                        isFaching={this.props.isFaching}
                        inProcces={this.props.inProcces}

                    />
                    : <Navigate to="/home" />}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        body: state.products.body,
        userId: state.auth.profile.id,
        isAuth: state.auth.isAuth,
        favorites: state.auth.profile.like,
        currentPage: state.products.currentPage,
        pageSize: state.products.pageSize,
        totalItemsCount: state.products.totalItemsCount,
        isFaching: state.products.isFaching,
        inProcces:state.auth.inProcces

    }
}


export default connect(mapStateToProps, { getFavorits, setCurrentPage, setItem, addFavThunk })(ContainerProducts);
