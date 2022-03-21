import { connect } from 'react-redux';
import React from 'react';
import HeaderNav from './HeaderNav';
import{autoAuthThunk,setError} from '../../redux/authReducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
            this.props.autoAuthThunk()
        
    }

    render() {
        return (
            <div>
                <HeaderNav isAuth={this.props.isAuth}
                errorMessage={this.props.errorMessage}
                profile={this.props.profile}
                setError={this.props.setError}
                    />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
    } 
}


export default connect(mapStateToProps,{autoAuthThunk,setError})(HeaderContainer);
