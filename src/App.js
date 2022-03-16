import logo from './logo.svg';
import './App.css';

function App() {
  const product =[
    {name:'laptop',price:20000},
    {name:'phone',price:3000}
  ]
  return (
    <div className="App">
      {
        product.map(pro => <Product Name={pro.name} price={pro.price}></Product>)
      }
    </div>
  );
}

function Product(props){
  return (
    <div className='product'>
      <h1>Name:{props.Name}</h1>
      <h1>Price:{props.price}</h1>
    </div>
  )
}

export default App;
<h1>dsfsdjfh</h1>
