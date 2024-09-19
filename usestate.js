import{useState} from 'react';
import ReactDOM from 'react-dom/client';

function Car(){
  const [color,setColor]= useState("red");

  return(
    <>
  <h2>My fav color is {color}</h2>
  <button type="button" onClick= {() => setColor("blue")}>Change the color</button>
  </>
  );
}
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);
              