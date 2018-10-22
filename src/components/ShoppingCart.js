import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductsFromCart } from '../actions';

class ShoppingCart extends Component {

  _delete(index){
    let shop = this.props.cartList;
    shop.splice(index, 1)
    this.props.deleteProductsFromCart(shop)
  }

  render() {

    let shop = this.props.cartList;
    const countProducts = shop.reduce((counter, item) => {counter[item.element] = (counter[item.element] || 0) + 1;
        return counter;
    },{})
    console.log('count', Object.values(countProducts))

    return ( 
      <section className="section__container">
        <h2 className="section__title">Carrito</h2>
        <ul className="product__list">
        {this.props.cartList.map((product, index) => {
          if(product.element === Object.keys(countProducts)[index]) {
            return (
              <li key={index} className="product__element">
                <p className="element-name">
                  {product.element}
                </p>
                <span>{Object.values(countProducts)[index]}</span>
                <button 
                  className="element-button-delete"
                  onClick={this._delete.bind(this, index)}
                >
                  X
                </button>
              </li>
            )
          } else {
            return (
              <li key={index} className="product__element">
                <p className="element-name">
                  {product.element}
                </p>
                <span></span>
                <button 
                  className="element-button-delete"
                  onClick={this._delete.bind(this, index)}
                >
                  X
                </button>
              </li>
            )
          }
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