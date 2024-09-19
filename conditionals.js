import React from 'react';
import ReactDOM from 'react-dom/client';

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
  const a = props.a;
  if (a) {
    return <MadeGoal/>;
  }
  else{
  return <MissedGoal/>;
}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal a={true} />);


              