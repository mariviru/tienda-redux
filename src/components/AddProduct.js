import React, { Component } from 'react';
//import ProductButton from './ProductButton';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: '',
     }
  } 

  Add(event){
    event.preventDefault();
    this.props.addProduct(this.state);
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
        <input type="text"/>
        <button type="submit" className="product__form-button">
          Añadir Producto
        </button>
      </form>
     );
  }
}
 
export default AddProduct;
