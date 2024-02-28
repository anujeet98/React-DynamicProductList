import React, { useContext } from "react";
import './ProductSegment.css';
import ProdContext from "../../contexts/prod-context";


const ProductSegment= (props) => {
    const ctx = useContext(ProdContext);
    
    const deleteItemHandler = (id) => {
        ctx.onDeleteProduct(id);
    }

    return (
        <div className="segment">
            <div className='title'>{props.segment} Items:</div>
            <ul className="item-list">
                {ctx.data.filter(item=>item.category === props.segment).map(item => {
                    return (<li key={item.id} className='item-group'>
                        <button className="deleteBtn" onClick={() => deleteItemHandler(item.id)}>Delete</button>
                        <div>Rs. {item.price} - {item.category} - {item.name}</div>
                    </li>);
                })}
            </ul>
        </div>
    )
}

export default ProductSegment;