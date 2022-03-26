import { connect } from 'react-redux';
import React from 'react';
import Account from './Account';
import { logout } from '../../redux/authReducer'
import Preloader from '../ButtonsFrarment/Preloader';
import { Navigate } from "react-router-dom"

class AccountContainer extends React.Component {

    render() {
        if (this.props.inProcces) {
            return <Preloader />
        } 
        return (
            <div>{this.props.isAuth && !this.props.inProcces ? 
                <Account isAuth={this.props.isAuth}
                    logout={this.props.logout}
                    profile={this.props.profile} />
                :<div> зарегистрируйтесь или войдите</div>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        profile: state.auth.profile,
        inProcces: state.auth.inProcces
    }
}


export default connect(mapStateToProps, { logout })(AccountContainer);
