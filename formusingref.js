
import ReactDOM from 'react-dom/client';
import React from "react";

import {Component}   from "react"

class RefsForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    //  extract the node list from the form
    //  it looks like an array, but lacks array methods
    const { pet } = this.form;

    // a set of radios has value property
    // checkout out the log for proof
    console.log(pet, pet.value);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          ref={form => this.form = form}>
          <label>
        
            <input type="radio" value="cat" name="pet" />Cat
          </label><br></br>
          <label>
            
            <input type="radio" value="dog" name="pet" />Dog
          </label><br></br>
          <label>
        
            <input type="radio" value="ferret" name="pet" />Ferret
          </label><br></br>
          <input type="submit" value="Submit" /><br></br>
        </form><br></br>
      </div>
    );
  }
}


    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< RefsForm/>);