import React from "react";
import Corzina from './Corzina'
import { connect } from 'react-redux';

// контейнер для корзины

class CorzinaContainer extends React.Component {

    render() {
        debugger
        return (
            <div>
                {<Corzina cart={this.props.cart}/>}
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    debugger
    return {
        cart: state.auth.profile.cart,
    }
}


export default connect(mapStateToProps, {})(CorzinaContainer);