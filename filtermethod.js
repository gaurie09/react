import React  from "react";
import ReactDOM from "react-dom/client";
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
function List(){

const chemists = people.filter(people =>
  people.profession ==='chemist'
);

const listItems = chemists.map(people =>
  <li>
       
        {people.name} : { people.profession}
        
      
      </li>
);
return <ul>{listItems}</ul>;
}

 
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<List/>);
        