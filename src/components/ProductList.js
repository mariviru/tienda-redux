import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProduct from './AddProduct';

class ProductList extends Component {

  render() { 
    console.log('productList', this.props)
    return ( 
      <section className="section__container section__product">
        <h2>Catálogo</h2>
        <ul className="product__list">
        {this.props.productList.map((product, index) => {
          return (
            <li key={index} className="product__element">{product}</li>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList)