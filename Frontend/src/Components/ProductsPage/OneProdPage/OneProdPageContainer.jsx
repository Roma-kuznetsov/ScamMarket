import { connect } from 'react-redux';
import React from 'react';
import OneProdPage from './OneProdPage';
import { setItem } from '../../../redux/ProductsReducer'

// контейнер для одного товара

class OneProdPageContainer extends React.Component {

    componentDidMount() {
        const urlStr = window.location.pathname //берем id из урла
        this.props.setItem(urlStr) // делаем запрос по этому id
    }


    render() {
        debugger
        return (
            <div>
                {<OneProdPage selectedItem={this.props.selectedItem} 
                favorites={this.props.favorites}
                isFaching={this.props.isFaching} />}
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    debugger
    return {
        selectedItem: state.products.selectedItem,
        favorites: state.auth.profile.like,
        isFaching:state.products.isFaching
    }
}


export default connect(mapStateToProps, { setItem })(OneProdPageContainer);





















































/*    componentDidUpdate(prevState){
        if(prevState.selectedItem !== this.props.selectedItem){
            console.log("rerender if container")
            console.log(prevState)
            console.log(this.props)
            this.render()
        }
    }*/
