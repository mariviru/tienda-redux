import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProducts } from '../actions';

class ShoppingCart extends Component {

  // _delete(id){
  //   this.props.deleteProducts({element: this.state.product, id: this.state.id});
  //   let shop = this.props.cartList;
  //   shop.map((item, index) => {
  //     if(item.id === id) {
  //       this.props.cartList.splice(index, 1)
  //     }
  //     return shop;
  //   })
  // }

  render() { 
    console.log('props en shopping cart', this.props)
    return ( 
      <section className="section__container">
        <h2 className="section__title">Carrito</h2>
        <ul className="product__list">
        {this.props.cartList.map((product, index) => {
          return (
            <li key={index} className="product__element">{product.element}
               <button 
                // onClick={() => {this._delete(product.id).bind(this)}}
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
    deleteProducts: (product) => dispatch(deleteProducts(product))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart)