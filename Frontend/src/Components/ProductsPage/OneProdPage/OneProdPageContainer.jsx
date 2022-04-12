import { connect } from 'react-redux';
import React from 'react';
import OneProdPage from './OneProdPage';
import { addFavThunk, addCartThunk } from "../../../redux/authReducer"
import { setItem } from "../../../redux/ProductsReducer"
import Preloader from '../../ButtonsFrarment/Preloader';

// контейнер для одного товара

class OneProdPageContainer extends React.Component {

    componentDidMount() {
        const urlStr = window.location.hash //берем id из урла
        this.props.setItem(urlStr.slice(1,urlStr.length)) // делаем запрос по этому id
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div>
                {this.props.selectedItem ?
                    <OneProdPage selectedItem={this.props.selectedItem}
                        favorites={this.props.favorites}
                        isFaching={this.props.isFaching}
                        idUser={this.props.idUser}
                        addCartThunk={this.props.addCartThunk}
                        addFavThunk={this.props.addFavThunk}
                        inProcces={this.props.inProcces} />
                    : <Preloader />}
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    return {
        selectedItem: state.products.selectedItem,
        favorites: state.auth.profile.like,
        isFaching: state.products.isFaching,
        idUser: state.auth.profile.id,
        inProcces: state.auth.inProcces
    }
}


export default connect(mapStateToProps, { addFavThunk, setItem, addCartThunk })(OneProdPageContainer);





















































/*    componentDidUpdate(prevState){
        if(prevState.selectedItem !== this.props.selectedItem){
            console.log("rerender if container")
            console.log(prevState)
            console.log(this.props)
            this.render()
        }
    }*/
