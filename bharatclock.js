import ReactDOM from 'react-dom/client';
import React from "react";
import'bootstrap/dist/css/bootstrap.min.css'
    
let time=new Date();

function App(){
<centre class="clock" placeholder>
    <h1 >Project:Clock</h1>

</centre>
return(
    <>


<center class="p-3 mb-2 bg-black text-white">
    <h1>BHARAT CLOCK</h1><br></br>
<h2>This is the clock that shows the time in Bharat at all times.</h2>
<h3> This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3>
</center>
</>

);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< App/>);