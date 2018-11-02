import React, { Component } from 'react';
import { connect } from 'react-redux'

import btcLogo from './../marketing/img/logos/coins/BTC-Logo.985fb0a0c1847a84.svg';
import ethLogo from './../marketing/img/logos/coins/ETH-Logo.40605fc9b324c718.svg';
import xrpLogo from './../marketing/img/logos/coins/XRP-Logo.e2351ee282687597.svg';

class TopPrices extends Component {
    render() {
        return ( 
        <div className="topPrices d-flex flex-row justify-content-around my-flex-container">
            <div className="p-2 my-flex-item"><img src={btcLogo} className="btcLogoLanding" /></div>
            <div className="p-2 my-flex-item"><img src={ethLogo} className="ethLogoLanding" /></div>
            <div className="p-2 my-flex-item"><img src={xrpLogo} className="xrpLogoLanding" /></div>
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