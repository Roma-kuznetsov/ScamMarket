import { connect } from 'react-redux';
import React from 'react';
import OneProdPage from './OneProdPage';
import { setItem } from '../../../redux/ProductsReducer'

// контейнер для одного товара

class OneProdPageContainer extends React.Component {

    componentDidMount() {
        const urlStr = window.location.pathname
        this.props.setItem(urlStr)
        console.log(urlStr)
    }


    render() {
        return (
            <div>
                {<OneProdPage selectedItem={this.props.selectedItem} />}
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    debugger
    return {
        selectedItem: state.products.selectedItem
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
