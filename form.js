import React from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const submit=() =>{
    alert("Submitted the form");
  }
  return (
    <form>
      <label>Enter your First name:
        <input type="text" />
      </label><br/>

      <label>Enter your Last name:
        <input type="text" />
      </label><br/>

      <label>Enter your Class:
        <input type="text" />
      </label><br/>

      <label>Enter your Age:
        <input type="text" />
      </label><br/><br/><br/>
      <button type="button" onclick={submit}>Submit</button>
    

    </form>
    
    
  );
  
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
