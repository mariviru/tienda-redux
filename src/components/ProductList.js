import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProduct from './AddProduct';
import { addProductToCart } from '../actions';
import { addProductToFavorites } from '../actions';

class ProductList extends Component {

  render() { 
    return ( 
      <section className="section__container section__product">
        <h2 className="section__title">Catálogo</h2>
        <ul className="product__list">
        {this.props.productList.map((product, index) => {
          return (
            <li key={index} className="product__element">
              <p className="element-name">
                {product.element}
              </p>
              <button 
                className="element-button-buy" 
                onClick={() => {this.props.addProductToCart(product)}}
              >
                $
              </button>
              <button 
                className="element-button-fav" 
                onClick={() => {this.props.addProductToFavorites(product)}}
              >
                ❤
              </button>
            </li>
          )
        })}
        </ul>
        <AddProduct/>
      </section>
     );
  }
}

function mapStateToProps (state) {
  return {
    productList: state.product_list.productList,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    addProductToFavorites: (product) => dispatch(addProductToFavorites(product))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList)