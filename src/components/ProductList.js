import React, { Component } from 'react';
import AddProduct from './AddProduct';

class ProductList extends Component {

  render() { 
    return ( 
      <section className="section__container section__product">
        <h2>Catálogo</h2>
        <ul className="product__list">
          <li className="product__element"></li>
        </ul>
        <AddProduct/>
      </section>
     );
  }
}
 
export default ProductList;