import { connect } from 'react-redux';
import React from 'react';
import Account from './Account';
import { logout } from '../../redux/authReducer'

class AccountContainer extends React.Component {

    render() {
        return (
            <div>
                <Account isAuth={this.props.isAuth}
                    logout={this.props.logout}
                    profile={this.props.profile} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        profile: state.auth.profile
    }
}


export default connect(mapStateToProps, { logout })(AccountContainer);
