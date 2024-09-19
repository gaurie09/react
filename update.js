import {useState} from "react";
import ReactDOM from "react-dom/client";
 function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton /><br/>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp/>);
              