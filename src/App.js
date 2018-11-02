import React, { Component } from 'react';
import './App.css';

import {Provider} from 'react-redux';
import {store} from './redux/store.js';


import Posts from './components/Posts';
import PostForm from './components/PostForm';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />

          <PostForm />
          <Posts />
          <hr />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
