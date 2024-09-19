import React  from "react";
import ReactDOM from "react-dom/client";
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

 function List() {
  const listItems = people.map(item =>
    <li>{item}</li>
  );
  return <ol>{listItems}</ol>;
}


 
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<List/>);
        