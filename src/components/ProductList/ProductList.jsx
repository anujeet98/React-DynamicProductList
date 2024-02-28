import React from 'react';
import './ProductList.css';
import ProductSegment from '../ProductSegment/ProductSegment';

const ProductList = () => {
    return (
        <div className='ProductList'>
            <div className='ProductList-title'>Products</div>
            <ProductSegment segment='Electronics'></ProductSegment>
            <ProductSegment segment='Food'></ProductSegment>
            <ProductSegment segment='Clothing'></ProductSegment>
        </div>
    )
}

export default ProductList;