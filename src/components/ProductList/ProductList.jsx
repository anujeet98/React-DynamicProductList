import React from 'react';
import './ProductList.css';
import ProductSegment from '../ProductSegment/ProductSegment';

const ProductList = (props) => {

    // useEffect(()=>{
    //     // localStorage.getItem()
    // }, [])
    return (
        <div className='ProductList'>
            <div className='ProductList-title'>Products</div>
            <ProductSegment data={props.data} category='Electronics' onDeleteProduct={(id)=>props.onDeleteProduct(id)}></ProductSegment>
            <ProductSegment data={props.data} category='Food' onDeleteProduct={(id)=>props.onDeleteProduct(id)}></ProductSegment>
            <ProductSegment data={props.data} category='Clothing' onDeleteProduct={(id)=>props.onDeleteProduct(id)}></ProductSegment>
        </div>
    )
}

export default ProductList;