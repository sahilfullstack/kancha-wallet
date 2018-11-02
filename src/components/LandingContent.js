import React, { Component } from 'react';
import { connect } from 'react-redux'

import btcLogo from './../marketing/img/logos/coins/BTC-Logo.985fb0a0c1847a84.svg';
import ethLogo from './../marketing/img/logos/coins/ETH-Logo.40605fc9b324c718.svg';
import xrpLogo from './../marketing/img/logos/coins/XRP-Logo.e2351ee282687597.svg';
import erc20Logo from './../marketing/img/logos/coins/ERC20-Logo.e693bdab81f817fc.svg';
import bchLogo from './../marketing/img/logos/coins/BCH-Logo.6d663417c659e80a.svg';
import ltcLogo from './../marketing/img/logos/coins/LTC-Logo.22eaa58419d36d35.svg';
import dashLogo from './../marketing/img/logos/coins/DASH-Logo.0af0f2f0a184464e.svg';
import zecLogo from './../marketing/img/logos/coins/ZEC-Logo.2d182d5681ad6fd9.svg';
import rmgLogo from './../marketing/img/logos/coins/RMG-Logo.2ebbf7fb5abb9c20.svg';

class LandingContent extends Component {
    render() {
        return ( 
        <div className="DDcentreColumn DDcentreColumnXl">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <p className="DDBlueHeading u-center">
                Multi-Currency Platform
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <p className="DDsubSectionText u-center">
                90+ coins and tokens supported
              </p>
            </div>
          </div>
          
          <div className="marketing-coin-logos row u-center">
            <img src={btcLogo} className="btcLogoLanding" />
            <img src={ethLogo} className="ethLogoLanding" />
            <img src={erc20Logo} className="erc20LogoLanding" />
            <img src={xrpLogo} className="xrpLogoLanding" />
            <img src={bchLogo}  className="bchLogoLanding" />
            <img src={ltcLogo} className="ltcLogoLanding" />
            <img src={dashLogo}  className="dashLogoLanding" />
            <img src={zecLogo} className="zecLogoLanding" />            
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(LandingContent);