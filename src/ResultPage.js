import React from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { values } = location.state || {};

  return (
    <div>
      <h2>Result Page</h2>
     <ul>
        {values.map((value, index) => (
          <li key={index}>
            <div>Name: {value.name}</div>
            <div>Father's Name: {value.fatherName}</div>
            <div>Mobile Number: {value.mobile}</div>
            <div>Email ID: {value.email}</div>
            <div>Address: {value.address}</div>
            <div>Gender: {value.gender}</div>
            <div>Marital Status: {value.martialStatus}</div>
            <div>State: {value.state}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultPage;











