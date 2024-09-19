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
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <>
        <h1>My {this.state.brand}</h1>
        <h3>
          It is a {this.state.color}&nbsp;
          {this.state.model}&nbsp;from {this.state.year}.
        </h3>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

