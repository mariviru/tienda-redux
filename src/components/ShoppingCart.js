import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductsFromCart } from '../actions';

class ShoppingCart extends Component {

  _delete(id){
    let shop = this.props.cartList;
    shop.map((item, index) => {
      if(item.id === id) {
        shop.splice(index, 1)
      }
      return shop;
    })
    this.props.deleteProductsFromCart(this.props.cartList)
  }

  render() {
    return ( 
      <section className="section__container">
        <h2 className="section__title">Carrito</h2>
        <ul className="product__list">
        {this.props.cartList.map((product, index) => {
          return (
            <li key={index} className="product__element">
              <p className="element-name">
                {product.element}
              </p>
               <button 
                className="element-button-delete"
                onClick={this._delete.bind(this, product.id)}
              >
                X
              </button>
            </li>
          )
        })}
        </ul>
      </section>
     );
  }
}
 
function mapStateToProps (state) {
  return {
    productList: state.product_list.productList,
    cartList: state.cart_list.cartList,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteProductsFromCart: (product) => dispatch(deleteProductsFromCart(product))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart)