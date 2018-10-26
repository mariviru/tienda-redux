import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductsFromCart } from '../actions';

class ShoppingCart extends Component {

  _delete(index){
    let shop = this.props.cartList;
    shop.splice(index, 1)
    this.props.deleteProductsFromCart(shop)
  }

  _unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  _find_product_by_id = (id) => {
    let shop = this.props.cartList;
    let elementWithId = shop.find(function(element) {
    return element.id === id;
    });
    return elementWithId;
  }

  render() {
    let shop = this.props.cartList;

    const shopId = shop.map((ident)=>{
      return ident.id
    });

    const shopIdUnique = shopId.filter(this._unique.bind(this));

    return ( 
      <section className="section__container">
        <h2 className="section__title">Carrito</h2>
        <ul className="product__list">
        {shopIdUnique.map((id, index) => {
            return (
              <li key={index} className="product__element">
                <p className="element-name">
                  {this._find_product_by_id.bind(this)(id).element}
                </p>
                <span>
                  {shopId.filter(elem => {return (elem === id)}).length}
                </span>
                <button 
                  className="element-button-delete"
                  onClick={this._delete.bind(this, index)}
                >
                  X
                </button>
              </li>
            )}
          )}
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