import React, { Component } from 'react';
import { connect } from 'react-redux'

class TopPrices extends Component {
    render() {
        return ( 
        <div className="topPrices d-flex flex-row justify-content-around my-flex-container">
            <div class="p-2 my-flex-item"><span>BTC $6000</span></div>
            <div class="p-2 my-flex-item"><span>LTC $600</span></div>
            <div class="p-2 my-flex-item"><span>XMR $60</span></div>
            <div class="p-2 my-flex-item"><span>XMR $60</span></div>
            <div class="p-2 my-flex-item"><span>XMR $60</span></div>
            <div class="p-2 my-flex-item"><span>XMR $60</span></div>
        </div>
            );
    }
}
const mapStateToProps = state => {
    return {
        // user: state.authUser.user,
        // isAuth: state.authUser.isAuth
    }    
}
const mapDispatchToProps = dispatch => {
    return {
        openSignInWith: ()=> { dispatch({type: 'TOGGLE_MODAL', modalMode: true}) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPrices);