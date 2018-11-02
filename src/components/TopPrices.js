import React, { Component } from 'react';
import { connect } from 'react-redux'

import btcLogo from './../marketing/img/logos/coins/BTC-Logo.985fb0a0c1847a84.svg';
import ethLogo from './../marketing/img/logos/coins/ETH-Logo.40605fc9b324c718.svg';
import erc20Logo from './../marketing/img/logos/coins/ERC20-Logo.e693bdab81f817fc.svg';

class TopPrices extends Component {
    render() {
        return ( 
        <div className="topPrices d-flex flex-row justify-content-around my-flex-container">
            <div className="p-2 my-flex-item"><img src={btcLogo} className="btcLogoLanding" /></div>
            <div className="p-2 my-flex-item"><img src={ethLogo} className="ethLogoLanding" /></div>
            <div className="p-2 my-flex-item"><img src={erc20Logo} className="erc20LogoLanding" /></div>
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