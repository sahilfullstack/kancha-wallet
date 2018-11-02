import React, { Component } from 'react';
import { connect } from 'react-redux'

class Footer extends Component {
    render() {
        return ( 
        <div className="footer">
          <p>Crypto wallet for lazy people, <a href="http://127.0.0.1:3001/">Kancha Wallet</a>, by <a href="https://sahilsarpal.com">Sahil Sarpal</a>.</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);