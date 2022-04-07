import React from "react";
import Corzina from './Corzina'
import { connect } from 'react-redux';
import { removeCartThunk, updateCartThunk } from '../../redux/authReducer'
import { Navigate } from "react-router-dom"

// контейнер для корзины

class CorzinaContainer extends React.Component {

    removeCart = (fieldId) => {
        this.props.removeCartThunk(this.props.userId, fieldId)
    }

    updateCart = (fieldId, count) => {
        this.props.updateCartThunk(this.props.userId, fieldId, count)
    }


    render() {
        return (
            <div>
                {this.props.isAuth ?
                    <Corzina cart={this.props.cart}
                        removeCart={this.removeCart}
                        updateCart={this.updateCart}
                        inProcces={this.props.inProcces} />
                    : <Navigate to="/home" />}
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    return {
        cart: state.auth.profile.cart,
        userId: state.auth.profile.id,
        inProcces: state.auth.inProcces,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { removeCartThunk, updateCartThunk })(CorzinaContainer);