import React, { Component } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Favorites from './components/Favorites';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
       <ProductList/>
       <ShoppingCart/>
       <Favorites/>
      </main>
    );
  }
}

export default App;
