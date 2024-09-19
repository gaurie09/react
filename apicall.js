import "./App.css";


import ReactDOM from 'react-dom/client';

import React from "react";

class App extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
 
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }
 componentDidMount(){
    // ComponentDidMount is used to
    // execute the code
  
        fetch("https://jsonplaceholder.typicode.com/todos")
 
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            });
    

 }
        
    render(){
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );
 
        return (
            <div className="App">
                <h1 className="geeks">GeeksforGeeks</h1>
                <h3>Fetch data from an api in react</h3>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_Id: "}
                                    </strong>
                                    {item.userId},
                                </div>
                                <div>
                                    Id: {item.id},
                                </div>
                                <div>
                                    Title: {item.title},
                                </div>
                                <div>
                                    Completed: {item.completed}
                                </div>
                                
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

 
export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
