// src/components/ProductDetails.js
import React from 'react';
import './styles.css';

const ProductDetails = ({ match }) => {
  const productId = match.params.id;

  return (
    <div className="container">
      <h2>Product Details</h2>
      {/* Display details for the selected product */}
    </div>
  );
};

export default ProductDetails;
