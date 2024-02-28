import React, {useState, useContext} from 'react';
import './Form.css';
import ProdContext from '../../contexts/prod-context';

const Form  = () => {
    const [id, setID] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Electronics');
    const ctx = useContext(ProdContext);

    const setIdHandler = (event) => {
        setID(event.target.value);
    }
    const setPriceHandler = (event) => {
        setPrice(event.target.value);
    }
    const setNameHandler = (event) => {
        setName(event.target.value);
    }
    const setCategoryHandler = (event) => {
        setCategory(event.target.value);
    }
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        if(price<=0)
            return alert("Price cannot be negative or 0");
        else if(name.trim().length===0)
            return alert("Name cannot be empty");
        else if(id.trim().length===0)
            return alert("ID cannot be empty");
        const item = {
            id: id,
            name: name,
            price: price,
            category: category,
        }

        ctx.onSubmit(item);
        setID('');
        setName('');
        setPrice('');
        setCategory('Electronics');
    }
    return (
        <React.Fragment>
            <form className='form-main' onSubmit={formSubmitHandler}>
                <div className='form-element-group'>
                    <label>Product ID: </label>
                    <input type='text' onChange={setIdHandler} value={id} required></input>
                </div>
                <div className='form-element-group'>
                    <label>Selling Price: </label>
                    <input type='number' onChange={setPriceHandler} value={price} required></input>
                </div>
                <div className='form-element-group'>
                    <label>Product Name: </label>
                    <input type='text' onChange={setNameHandler} value={name} required></input>
                </div>
                <div className='form-element-group'>
                    <label>Category : </label>
                    <select onChange={setCategoryHandler} value={category} required>
                        <option>Electronics</option>
                        <option>Food</option>
                        <option>Clothing</option>
                    </select>
                </div>
                <div className='form-element-group'>
                    <button className='submitBtn' type='submit'>Add Product</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default Form;