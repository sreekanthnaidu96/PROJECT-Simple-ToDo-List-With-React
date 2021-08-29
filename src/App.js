import React, { useState } from "react";
import "./App.css";
import ListItems from "./Components/ListItems";
function App() {
  const [Items, setItems] = useState([]);
  const [CurrentItem, setCurrentItem] = useState({ text: "", key: "" });
  const [Hint, setHint] = useState(false);

  function HandleInput(event) {
    setCurrentItem({
      text: event.target.value,
      key: Date.now(),
    });
  }
  function AddItem(event) {
    event.preventDefault();
    const NewItem = CurrentItem;
    if (NewItem.text !== "") {
      const totalItems = [...Items, NewItem];
      setItems(totalItems);
      setHint(true);
      setCurrentItem({
        text: "",
        key: "",
      });
    }
  }

  function setUpdate(text, key) {
    const newItems = Items.map((itemobj) => {
      return { ...itemobj, text: itemobj.key === key ? text : itemobj.text };
    });
    setItems(newItems);
  }

  function DeleteItem(key) {
    const FilteredItems = Items.filter((item) => item.key !== key);
    setItems(FilteredItems);
    setHint(false);
  }
  return (
    <div className="app">
      <form className="todo_form" onSubmit={AddItem}>
        <input
          type="text"
          placeholder="Add A Task"
          value={CurrentItem.text}
          onChange={HandleInput}
        />
        <button type="submit">Add</button>
      </form>
      <p className="hint">
        {Hint
          ? "HINT:Click The Task To Edit"
          : "HINT:Write SomeThing And Click Add"}
      </p>
      <ListItems items={Items} deleteItem={DeleteItem} setUpdate={setUpdate} />
    </div>
  );
}

export default App;
