import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductsFromFavorites } from '../actions';

class Favorites extends Component {
 
  _delete(index){
    let fav = this.props.favoriteList;
    fav.splice(index, 1)
    this.props.deleteProductsFromFavorites(fav)
  }

  _unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  _find_product_by_id = (id) => {
    let fav = this.props.favoriteList;
    let elementWithId = fav.find(function(element) {
    return element.id === id;
    });
    return elementWithId;
  }

  render() {
    let fav = this.props.favoriteList;

    const favId = fav.map((ident)=>{
      return ident.id
    });

    const favIdUnique = favId.filter(this._unique.bind(this));

    return ( 
      <section className="section__container">
        <h2 className="section__title">Favoritos</h2>
        <ul className="product__list">
        {favIdUnique.map((id, index) => {
          return (
            <li key={index} className="product__element">
              <p className="element-name">
              {this._find_product_by_id.bind(this)(id).element}
              </p>
              <span>
                {favId.filter(elem => {return (elem === id)}).length}
              </span>
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