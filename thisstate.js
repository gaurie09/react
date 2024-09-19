import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <>
        <h1>My {this.state.brand}</h1>
        <h2>
          It is a {this.state.color}&nbsp; 
          {this.state.model}&nbsp;from {this.state.year}.
        </h2>
      </>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />);
