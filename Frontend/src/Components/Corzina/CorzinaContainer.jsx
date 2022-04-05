import React from "react";
import Corzina from './Corzina'
import { connect } from 'react-redux';
import {removeCartThunk} from '../../redux/authReducer'

// контейнер для корзины

class CorzinaContainer extends React.Component {

    removeCart = (fieldId) =>{
        debugger
        this.props.removeCartThunk(this.props.userId,fieldId)
    }

    render() {
        debugger
        return (
            <div>
                {<Corzina cart={this.props.cart}
                removeCart = {this.removeCart}/>}
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    debugger
    return {
        cart: state.auth.profile.cart,
        userId: state.auth.profile.id
    }
}


export default connect(mapStateToProps, {removeCartThunk})(CorzinaContainer);