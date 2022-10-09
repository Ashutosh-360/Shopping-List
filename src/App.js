import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState({
    title: "",
    quantity: "",
    price: "",
  });
  const [itemList, setItemList] = useState([]);
  const [display, setDisplay] = useState(false);
  const [displayAddItem, setDisplayAddItem] = useState(true);

  const onChangeHandler = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const onDisplayHandler = () => {
    setDisplay(!display);
  };

  const onSubmitHandler = () => {

    if(item.title==="")
    {
      alert("Please enter title");
      return;
    }
    else if (item.quantity==="")
    {alert("Please enter quantity");
    return;

    }
    else if (item.price==="")
    {
      alert("Please enter price");
    return;

    }
    setItemList([
      ...itemList,
      {
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      },
    ]);
    setDisplayAddItem(!displayAddItem);
    setDisplay(!display);
    setItem({
      title: "",
    quantity: "",
    price: "",
    })

  };

  const addItemDisplay = () => {
    setDisplayAddItem(!displayAddItem);
    setDisplay(!display);
  };
  console.log(itemList);
  return (
    <div className="App">
      

      {display && (
        <div className="add-item-container">
          <h1>Personal Shopping List</h1>

          <h2>Add Item</h2>
          <label htmlFor="title">Title</label>
          <input
            onChange={onChangeHandler}
            value={item.title}
            type="text"
            name="title"
            placeholder="Insert Title"
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            onChange={onChangeHandler}
            value={item.quantity}
            type="number"
            name="quantity"
            placeholder="0"
          />
          <label htmlFor="price">Price</label>
          <input
            onChange={onChangeHandler}
            value={item.price}
            type="number"
            name="price"
            placeholder="0.00"
          />
          <div className="btn-container">
            <button type="submit" onClick={onSubmitHandler}>
              Submit
            </button>
            <button onClick={addItemDisplay}>Close</button>
          </div>
        </div>
      )}

      {displayAddItem && (
        <div className="groceries-container">
          <h1>Personal Shopping List</h1>
          <h2>Groceries List</h2>
          <ul>
            {itemList.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item.title}</span>
                  <span>Quantity:{item.quantity}</span>
                  <span>{item.price}</span>
                </li>
              );
            })}
          
          </ul>
          {displayAddItem && 
          <div className="additembtn"><button  onClick={addItemDisplay}>Add Item</button></div>}
        </div>
      )}
      
    </div>
  );
}

export default App;
