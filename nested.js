import React from 'react';
import ReactDOM from 'react-dom/client';

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my Garage?</h1>
	    <Car />
    </>
  );
}
function Bike(){
return(
<>
<h2>I have a cat.</h2>
<Garage/>
<Car/>
</>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bike/>);
              
              