import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './../sahil-ai.png';

class Header extends Component {
    render() {
        return ( 
           <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top ">
      <a className="navbar-brand" href="#">
        <img alt="Kancha Wallet" src={logo} width="60" height="60" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Disclaimer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Future</a>
          </li>
        </ul>
          <button className="btn btn-outline-success mt-2 mt-md-0" type="submit">Login</button>
      </div>
    </nav>
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);

/* org
   <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#"><img src="./../sahil-ai.png" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        // <ul class="navbar-nav mr-auto">
        //   <li class="nav-item active">
        //     <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        //   </li>
        //   <li class="nav-item">
        //     <a class="nav-link" href="#">Link</a>
        //   </li>
        //   <li class="nav-item">
        //     <a class="nav-link disabled" href="#">Disabled</a>
        //   </li>
        // </ul>
        // <form class="form-inline mt-2 mt-md-0">
        //   <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        //   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        // </form>
      </div>
    </nav>
 */