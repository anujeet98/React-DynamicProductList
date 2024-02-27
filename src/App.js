import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';

function App() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  },[]);

  const addProdHandler = (newItem) =>{
    const updatedItems = [...items, newItem];
    localStorage.setItem('items', JSON.stringify(updatedItems))
    setItems(updatedItems);
  }
  const deleteProdHandler = (id) => {
    const updatedItems = items.filter(item=>item.id!==id);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
  }
  return (
    <div className="App">
      <div className='left'>
        <Form onSubmit={addProdHandler}></Form>
      </div>
      <div className='right'>
        <ProductList data={items} onDeleteProduct={deleteProdHandler}></ProductList>
      </div>
    </div>
  );
}

export default App;
