import { connect } from 'react-redux';
import React from 'react';
import Account from './Account';
import { logout } from '../../redux/authReducer'
import { Navigate } from "react-router-dom"

class AccountContainer extends React.Component {

    render() {
        return (
            <div>{this.props.isAuth ? 
                <Account isAuth={this.props.isAuth}
                    logout={this.props.logout}
                    profile={this.props.profile} />
                :<Navigate to="/home"/>}
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
