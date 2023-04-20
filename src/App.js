import "./App.css"; // Import the CSS file for the App component

import Axios from "axios"; // Import the Axios library for making HTTP requests

import { useEffect, useState } from "react"; // Import the useEffect and useState functions from the React library

function App() { // Declare the App component as a function

  const [generatedExcuse, setGeneratedExcuse] = useState(""); // Declare a state variable called generatedExcuse and a function for updating it called setGeneratedExcuse, initialized with an empty string.

  const fetchExcuse = (excuse) => { // Declare a fetchExcuse function that takes an excuse argument

    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then( // Make a GET HTTP request to an API that returns an excuse based on the provided argument.
      (res) => {
        setGeneratedExcuse(res.data[0].excuse); // Update the state of generatedExcuse with the excuse returned by the API.
      }
    );
  };
  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      {/* Render buttons with click handlers that call fetchExcuse with different excuses */}
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>

      {/* Render the generated excuse */}
      <p>{generatedExcuse}</p>
    </div>
  );
}


export default App; // Export the App component as the default component for this module.
