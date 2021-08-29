import React from "react";
import "./ListItems.css";
import FlipMove from "react-flip-move";

function ListItems({ items, deleteItem, setUpdate }) {
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(event) => {
              setUpdate(event.target.value, item.key);
            }}
          />
          <i className="fas fa-trash" onClick={() => deleteItem(item.key)}></i>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
