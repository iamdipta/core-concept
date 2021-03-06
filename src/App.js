import React, { useState, useEffect } from "react";//here import use state

import logo from './logo.svg';
import './App.css';

function App() {
  const friends = ['Dipta', 'Rajesh', 'Akash', 'Mohesh', 'pranta', 'mk', 'noman', 'wahid']
  const products = [
    { name: 'photoShop', price: '$90' },
    { name: 'Bat', price: '$500' },
    { name: 'Ball', price: '$3' },
    { name: 'light', price: '$250' },

  ]
  const family = [
    { name: 'Dipannita', relation: 'sister', member: 'family' },
    { name: 'Shefaly', relation: 'mother', member: 'family' },
    { name: 'Utsa ', relation: 'brother', member: 'family' },
    { name: 'Dinabandhu', relation: 'father', member: 'family' },
    { name: 'Rajesh', relation: 'brother', member: 'cousin' },
    { name: 'Akash', relation: 'friend', member: 'friend' },
    { name: 'Mohesh', relation: 'friend', member: 'friend' },
    { name: 'Pranta', relation: 'friend', member: 'friend' },
    { name: 'MK', relation: 'friend', member: 'friend' },
    { name: 'noman', relation: 'friend', member: 'friend' },
  ]

  return (
    <div className="App">
      <header className="App-header">

        <Count></Count>
        <Users></Users>
        <ul>{
          friends.map(friend => <li>{friend}</li>)
        }
        </ul>

        {
          products.map(pro => <Product product={pro}></Product>)
        }




        {/* <Product name={products[0].name} price={products[0].price} ></Product>
        <Product name={products[1].name} price={products[1].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
        <Names name='Dipta Roy' job='CSE'></Names>
        <Names name='rajesh' job='EEE'></Names>
        <p>This is my first react project </p>
        <p>This is my first react project </p>

        {
          family.map(fa => <Family family={fa} ></Family>)
        }

      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '2px solid blue',
    borderRadius: '5px',
    backgroundColor: 'gray',
    height: '300px',
    width: '400px',
    float: 'left',

  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>name:{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>

    </div>
  )

}


function Names(props) {
  const NamesStyle = {
    border: '2px solid gold',
    margin: '10px',
    width: '600px'
  }
  return (
    <div style={NamesStyle}>
      <h1>name: {props.name}</h1>
      <h2>job: {props.job}</h2>
    </div>
  )
}
function Family(props) {
  const familyStyle = {
    border: '2px solid gold',
    backgroundColor: 'gray',
    margin: '5px',
    padding: '10px',
    display: 'flex'
  }
  const { name, relation, member } = props.family;
  return (
    <div style={familyStyle}>
      <p>Name:{name}</p>
      <p>Relation:{relation}</p>
      <p>Member:{member}</p>
    </div>
  )

}

function Count(props) {
  // Use state here example for counter
  const [counter, setCounter] = useState(10);
  const handleIncrease = () => {
    const newCount = counter + 1;//increase counter
    setCounter(newCount);//set counter
  }
  const handleDecrease = () => {
    const newCount = counter - 1;
    setCounter(newCount);
  }
  return (
    <div>
      <h1>counter:{counter}</h1>
      <button onClick={handleIncrease}>increase</button>

      <button onClick={handleDecrease}>Decrease</button>

    </div>
  )

}
// here call API
function Users() {
  const userStyle = {
    display: 'flex'
  }
  const [users, setUsers] = useState([]);//use state for user data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic users:{users.length}</h3>
      <div style={userStyle}>

        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
        <ul>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </ul>
      </div>
    </div>
  )
}
export default App;
