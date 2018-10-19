import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToList } from '../actions';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        element: '',
        id: '',
      }
  } 

  _add(event){
    event.preventDefault();
    this.props.addProductToList({element: this.state.element, id: this.state.id});
    this.setState(
      {
        element: '',
        id: '',
      }
    );
  }
  
  render() { 
    return ( 
      <form 
        onSubmit={this._add.bind(this)} 
        className="product__form"
      >
        <input 
          className="product__form-input"
          type="text" 
          value={this.state.element}
          onChange={(e) => 
            {this.setState(
              {
                element: e.target.value,
                id: this.props.productList.length,
              }
            )}
          }
        />
        <button 
          type="submit" 
          className="product__form-button"
        >
          Añadir Producto
        </button>
      </form>
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
    addProductToList: (product) => dispatch(addProductToList(product))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProduct)
