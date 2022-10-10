import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import List from "./components/List";

function App() {
  const [itemList, setItemList] = useState([]);
  const [display, setDisplay] = useState(false);
  const [displayAddItem, setDisplayAddItem] = useState(true);
  const [item, setItem] = useState({
    title: "",
    quantity: "",
    price: "",
  });

  const onDisplayHandler = () => {
    setDisplay(!display);
  };

  const addItemDisplay = () => {
    setDisplayAddItem(!displayAddItem);
    setDisplay(!display);
  };

  console.log(itemList);
  return (
    <div className="App">
      {display && (
        <AddItem
          item={item}
          setItem={setItem}
          display={display}
          setDisplay={setDisplay}
          itemList={itemList}
          setItemList={setItemList}
          setDisplayAddItem={setDisplayAddItem}
          addItemDisplay={addItemDisplay}
          onDisplayHandler={onDisplayHandler}
        />
      )}

      {displayAddItem && (
        <List
          itemList={itemList}
          displayAddItem={displayAddItem}
          setDisplayAddItem={setDisplayAddItem}
          setDisplay={setDisplay}
          display={display}
          addItemDisplay={addItemDisplay}
        />
      )}
    </div>
  );
}

export default App;
