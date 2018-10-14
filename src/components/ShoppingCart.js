import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends Component {

  render() { 
    console.log('cartList', this.props.cartList)
    return ( 
      <section className="section__container">
        <h2 className="section__title">Carrito</h2>
        <ul className="product__list">
        {this.props.cartList.map((product, index) => {
          return (
            <li key={index} className="product__element">{product}
              <button 
                type="submit">X</button>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart)