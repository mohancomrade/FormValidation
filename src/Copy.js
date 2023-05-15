import React, { useState } from "react";

function Copy() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [state, setState] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      alert(`Name: ${name}\nGender: ${gender}\nMarital Status: ${maritalStatus}\nState: ${state}`);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleMaritalStatusChange = (e) => {
    setMaritalStatus(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!name) {
      formErrors.name = "Name is required";
    }

    if (!gender) {
      formErrors.gender = "Gender is required";
    }

    if (!maritalStatus) {
      formErrors.maritalStatus = "Marital status is required";
    }

    if (!state) {
      formErrors.state = "State is required";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male" checked={gender === "male"} onChange={handleGenderChange} />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" checked={gender === "female"} onChange={handleGenderChange} />
        <label htmlFor="female">Female</label>
        {errors.gender && <span>{errors.gender}</span>}
      </div>
      <div>
        <label htmlFor="marital-status">Marital Status:</label>
        <select id="marital-status" value={maritalStatus} onChange={handleMaritalStatusChange}>
          <option value=""></option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
        {errors.maritalStatus && <span>{errors.maritalStatus}</span>}
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <select id="state" value={state} onChange={handleStateChange}>
          <option value=""></option>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
        </select>
        {errors.state && <span>{errors.state}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Copy;
