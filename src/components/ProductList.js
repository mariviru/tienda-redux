import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProduct from './AddProduct';
import { 
  addProductToCart,
  addProductToFavorites,
  deleteProductsFromList,
  deleteProductsFromCart,
  deleteProductsFromFavorites,
 } from '../actions';

class ProductList extends Component {

  _delete(index){
    let list = this.props.productList;
    let shop = this.props.cartList;
    let fav = this.props.favoriteList;
    let productId = list[index].id;

    list.splice(index, 1);

    shop = shop.filter((item) => {
      return item.id !== productId;
    })

    fav = fav.filter((item) => {
      return item.id !== productId;
    })


    this.props.deleteProductsFromList(list)
    this.props.deleteProductsFromCart(shop)
    this.props.deleteProductsFromFavorites(fav)
  }

  render() { 
    console.log('props en ProductList', this.props)
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
              <button 
                className="element-button-delete"
                onClick={this._delete.bind(this, index)}
              >
                X
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
    cartList: state.cart_list.cartList,
    favoriteList: state.favorites_list.favoriteList,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    addProductToFavorites: (product) => dispatch(addProductToFavorites(product)),
    deleteProductsFromList: (product) => dispatch(deleteProductsFromList(product)),
    deleteProductsFromCart: (product) => dispatch(deleteProductsFromCart(product)),
    deleteProductsFromFavorites: (product) => dispatch(deleteProductsFromFavorites(product)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList)