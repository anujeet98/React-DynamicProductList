import './App.css';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <Form></Form>
      </div>
      <div className='right'>
        <ProductList></ProductList>
      </div>
    </div>
  );
}

export default App;
