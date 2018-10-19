import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProducts } from '../actions';

class Favorites extends Component {
 
  // _delete(id){
  //   this.props.deleteProducts(this.state);
  //   let fav = this.props.favoriteList.map((item, index) => {
  //     if(item.id === id) {
  //       this.props.favoriteList.splice(index, 1)
  //     }
  //     return fav;
  //   })
  // }

  render() { 
    return ( 
      <section className="section__container">
        <h2 className="section__title">Favoritos</h2>
        <ul className="product__list">
        {this.props.favoriteList.map((product, index) => {
          return (
            <li key={index} className="product__element">{product.element}
              <button 
                // onClick={() => {this.props._delete(product.id)}}
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
    deleteProducts: (product) => dispatch(deleteProducts(product))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites)