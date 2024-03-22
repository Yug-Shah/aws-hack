import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

const api_link = "https://t2hmqn65qf.execute-api.us-east-1.amazonaws.com/test/helloworld?";
fetch(api_link,
{
  method: 'GET',
  withCredentials: false,
  headers:{
       "Access-Control-Allow-Origin": "*", // Required for CORS support to work
       "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS,
       "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE,OPTIONS",
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .then((result) => {

    const data  = result.events;
    console.log(data)
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    data.forEach(entry => {
        const row = document.createElement('tr');
        console.log(entry.Severity)
        row.innerHTML = `<td>${entry.Name}</td><td>${entry.Location}</td><td>${entry.Severity}</td>`;
        tableBody.appendChild(row);
     });
  });

export default App;
