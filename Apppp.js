import * as React  from "react";
import ReactDOM from "react-dom/client";
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}



 
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
        