import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductsFromFavorites } from '../actions';

class Favorites extends Component {
 
  _delete(id){
    let fav = this.props.favoriteList;
    fav.map((item, index) => {
      if(item.id === id) {
        fav.splice(index, 1)
      }
      return fav;
    });
    this.props.deleteProductsFromFavorites(fav)
  }

  render() { 
    console.log('favoritos', this.props.favoriteList)
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