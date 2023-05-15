import React from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { values } = location.state || {};

  return (
    <div>
      <h2>Result Page</h2>
      {values && values.length > 0 ? (
        values.map((value, index) => (
          <div key={index}>
            <p>Name: {value.name}</p>
            <p>Father's Name: {value.fatherName}</p>
            <p>Mobile Number: {value.mobile}</p>
            <p>Email: {value.email}</p>
            <p>Address: {value.address}</p>
            <p>Gender: {value.gender}</p>
            <p>Marital Status: {value.martialStatus}</p>
            <p>State: {value.state}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default ResultPage;











