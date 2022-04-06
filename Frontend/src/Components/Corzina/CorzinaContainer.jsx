import React from "react";
import Corzina from './Corzina'
import { connect } from 'react-redux';
import {removeCartThunk,updateCartThunk} from '../../redux/authReducer'

// контейнер для корзины

class CorzinaContainer extends React.Component {

    removeCart = (fieldId) =>{
        this.props.removeCartThunk(this.props.userId,fieldId)
    }

    updateCart = (fieldId,count) =>{
        this.props.updateCartThunk(this.props.userId,fieldId,count)
    }


    render() {
        return (
            <div>
                {<Corzina cart={this.props.cart}
                removeCart = {this.removeCart}
                updateCart={this.updateCart}
                inProcces={this.props.inProcces}/>}
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    return {
        cart: state.auth.profile.cart,
        userId: state.auth.profile.id,
        inProcces:state.auth.inProcces
    }
}


export default connect(mapStateToProps, {removeCartThunk,updateCartThunk})(CorzinaContainer);