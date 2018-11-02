import React, { Component } from 'react';
import './App.css';

import {Provider} from 'react-redux';
import {store} from './redux/store.js';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import Header from './components/Header';
import Footer from './components/Footer';
import TopPrices from './components/TopPrices';
import LandingHeader from './components/LandingHeader';
import LandingContent from './components/LandingContent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <TopPrices />
          <LandingHeader />
          <LandingContent />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
