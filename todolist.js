import React from "react";
import ReactDOM from "react-dom/client";
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

 function PackingList() {
  return (
    <>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </>
  );
}



const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<PackingList/>)
              