import { clearCartThunk } from '../../redux/authReducer'
import { connect } from 'react-redux';
import { useState } from 'react';
import WigetYandex from './WigetYandex';
import { Navigate } from 'react-router-dom';


const WigetYandexContainer = (props) => {
    const [variant, setVariant] = useState(1)

    return (
        <div>
            {props.cart !== undefined && props.cart.length >= 1 ?
                <WigetYandex variant={variant} setVariant={setVariant} cart={props.cart}
                    id={props.id} clearCartThunk={props.clearCartThunk} />
                : <Navigate to='/home' />}
        </div>
    )
};
const mapStateToProps = function (state) {
    return {
        cart: state.auth.profile.cart,
        id: state.auth.profile.id
    }
}

export default connect(mapStateToProps, { clearCartThunk })(WigetYandexContainer);