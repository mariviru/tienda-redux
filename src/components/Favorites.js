import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductsFromFavorites } from '../actions';

class Favorites extends Component {
 
  _delete(index){
    let fav = this.props.favoriteList;
    fav.splice(index, 1)
    this.props.deleteProductsFromFavorites(fav)
  }

  render() {
    return ( 
      <section className="section__container">
        <h2 className="section__title">Favoritos</h2>
        <ul className="product__list">
        {this.props.favoriteList.map((product, index) => {
          return (
            <li key={index} className="product__element">
              <p className="element-name">
                {product.element}
              </p>
              <span>{index}</span>
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
      </section>
     );
  }
}
 
function mapStateToProps (state) {
  return {
    productList: state.product_list.productList,
    favoriteList: state.favorites_list.favoriteList,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteProductsFromFavorites: (product) => dispatch(deleteProductsFromFavorites(product))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites)