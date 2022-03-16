import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      <Counter></Counter>
      <ExternamUser></ExternamUser>
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
function Counter(){
  const[count,setCount]=useState(0)
  const increaseCount =()=>setCount(count+1)
  const decreasCount =()=>setCount(count-1)
  return(
   <div>
      <h1>Number:{count}</h1>
    <button onClick={increaseCount}>Incrices</button>
    <button onClick={decreasCount}>Decries</button>
   </div>
  )
}

function ExternamUser(){
  const[user,setUser]=useState()
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res =>res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div>
      <h1>ExternamUser</h1>
      <p>{user.length}</p>
      {
        user.map(use =>)
      }
    </div>
  )
}

function User(props){
  return(
    <div>
      
    </div>
  )
}

export default App;

