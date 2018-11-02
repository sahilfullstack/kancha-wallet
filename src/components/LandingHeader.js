import React, { Component } from 'react';
import { connect } from 'react-redux'
import landingVideo from './../marketing/video/landing.mp4';

class LandingHeader extends Component {
    render() {
        return ( 
        <div className="LandingHeader masthead">
            <video playsInline="" loop="" muted="" autoPlay="">
              <source src={landingVideo} type="video/mp4"/>
            </video>

            <div className="DDcentreColumn">
              <div className="header-masthead">
                <h1>
                  Kancha Wallet
                </h1>
                <h2>
                  Crypto Wallet for lazy folks
                </h2>
              </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(LandingHeader);