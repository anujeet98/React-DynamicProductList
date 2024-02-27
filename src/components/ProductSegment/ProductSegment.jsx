import React from "react";
import './ProductSegment.css';


const ProductSegment= (props) => {
    const deleteItemHandler = (id) => {
        props.onDeleteProduct(id);
    }
    return (
        <div className="segment">
            <div className='title'>{props.category} Items:</div>
            <ul className="item-list">
                {props.data.filter(item=>item.category === props.category).map(item => {
                    return (<li key={item.id} className='item-group'><div>{item.price} - {item.category} - {item.name}</div> <button className="deleteBtn" onClick={() => deleteItemHandler(item.id)}>Delete</button></li>);
                })}
            </ul>
        </div>
    )
}

export default ProductSegment;