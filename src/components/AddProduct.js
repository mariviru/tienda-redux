import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToList } from '../actions';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: '',
     }
  } 

  Add(event){
    event.preventDefault();
    this.props.addProductToList(this.state);
    this.setState({
      product: '',
    });
  }
  
  render() { 
    return ( 
      <form 
        onSubmit={this.Add.bind(this)} 
        className="product__form"
      >
        <input 
          type="text" 
          value={this.state.product}
          onChange={(e) => 
            {this.setState({
              product: e.target.value
            })}
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
