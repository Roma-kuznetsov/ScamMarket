import { connect } from 'react-redux';
import React from 'react';
import TshitrPage from './Tshirt/TshitrPage';
import { setCurrentPage, setItem,getFavorits } from "../../redux/ProductsReducer";
import { addFavThunk } from "../../redux/authReducer"


class ContainerProducts extends React.Component {

    componentDidMount(){
        if(this.props.isAuth){
            this.props.getFavorits(this.props.userId)
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.isAuth !== prevProps.isAuth || this.props.favorites !== prevProps.favorites ){
            this.props.getFavorits(this.props.userId)
        }
    }
    /*
    onPageChanged = (pageNumber) => {
        this.props.getTovars(pageNumber, this.props.pageSize);
    }
    */

    select = (id) => {
        this.props.setItem(id)
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
                select={this.select}
                addFavThunk={this.props.addFavThunk}
                setCurrentPage={this.props.setCurrentPage}
                setItem={this.props.setItem}
                onPageChanged={this.onPageChanged}
                /> 
                :<div>Авторизируйтесь или зарегистрируйтесь</div> }
                
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
        totalItemsCount: state.products.totalItemsCount 
    }
}


export default connect(mapStateToProps, { getFavorits,setCurrentPage, setItem, addFavThunk })(ContainerProducts);
