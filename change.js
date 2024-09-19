import React from "react";
import ReactDOM from "react-dom/client";
let guest = 1;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest*2;
  return <h2>Tea cup for guest #{guest}</h2>;
}

 function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
 }
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<TeaSet/>);
              