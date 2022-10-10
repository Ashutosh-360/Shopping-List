const List = (props) => {
  const { itemList, displayAddItem, addItemDisplay } = props;

  return (
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
      {displayAddItem && (
        <div className="additembtn">
          <button onClick={addItemDisplay}>Add Item</button>
        </div>
      )}
    </div>
  );
};

export default List;
