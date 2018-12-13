import React, { Component } from 'react';
import './index.css';
import ProductList from '../../components/productList';

class Home extends Component {


  render() {
    return (
      <div className="container">
        <ProductList products={this.props.products} />
      </div>
    );
  }
}

export default Home;
