
import { useState } from 'react';
import './App.css';

function App() {
  const [item,setItem]=useState({
    title:"",
    quantity:"",
    price:"",
  });
  const [itemList,setItemList]=useState([]);
  const [display,setDisplay]=useState(false);
  const [displayAddItem,setDisplayAddItem]=useState(true);


  const onChangeHandler=(event)=>{
    setItem({
      ...item,[event.target.name]:event.target.value
    })
  }

  const onDisplayHandler=()=>{
    setDisplay(!display);
  }
  

  const onSubmitHandler=()=>{
     setItemList([...itemList,{
      title:item.title,
    quantity:item.quantity,
    price:item.price,
    }])
  }

  const addItemDisplay=()=>{
    setDisplayAddItem(!displayAddItem);
    setDisplay(!display);

  }
  console.log(itemList);
  return (
    <>
    <h1>Personal Shopping List</h1>
    {displayAddItem && <button onClick={addItemDisplay}>Add Item</button>}
    
    {display && <><h2>Add Item</h2>
    <label htmlFor="title">Title</label>
    <input onChange={onChangeHandler} value={item.title} type="text" name='title' placeholder='Insert Title' />
    <label htmlFor="quantity">Quantity</label>
    <input onChange={onChangeHandler} value={item.quantity} type="number" name='quantity' placeholder='0' />
    <label htmlFor="price">Price</label>
    <input onChange={onChangeHandler} value={item.price} type="number" name='price' placeholder='0.00' />
    <button type='submit' onClick={onSubmitHandler}>Submit</button>
    <button onClick={addItemDisplay}>Close</button></>
    }

    <h2>Groceries List</h2>
      <ul>
        {itemList.map((item,index)=>{
            return <li key={index}>
            <span>{item.title}</span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
            </li>
        })}
      </ul>

    

    </>
  );
}

export default App;
