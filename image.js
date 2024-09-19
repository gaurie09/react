import React from "react";
import ReactDOM from "react-dom/client";
function Profile() {
  return (
    <img
      src="https://www.pexels.com/search/flowers/"
    />
  );
}

function Gallery() {
  return (
    <section>
      <h1>Flowers</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}




const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gallery/>);
              