import { useState } from "react";

// import Copy from "./Copy";
import {  matchRoutes,useNavigate} from "react-router-dom";





function Forms() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [state, setState] = useState("");
  const [values, setValues] = useState([]);
  const [error, setError] = useState("");



  const navigate = useNavigate();


  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleFatherNameChange = (event) => {
    setFatherName(event.target.value);
    
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleMartialsChange = (event) => {
    setMartialStatus(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      setError("Name cannot be empty");
      return;
    }
    if (fatherName.trim() === "") {
      setError("Fathers Name cannot be empty");
      return;
    }
    if (mobile.trim() === "") {
      setError("Mobile Number cannot be empty");
      return;
    }
    if (email.trim() === "") {
      setError("Email ID cannot be empty");
      return;
    }
    if (address.trim() === "") {
      setError("Address cannot be empty");
      return;
    }

    if (!gender) {
      setError("Gender is required");
      return;
    }

    if (!martialStatus) {
      setError("MartialStatus is required");
      return;
    }
    if (!state) {
      setError("State is required");
      return;
    }

    if (name.length != 8 && name.length < 8) {
      setError("Name cannot be more than 8 characters");
      return;
    }
    if (fatherName.length < 8 && fatherName.length != 8) {
      setError("Father's name cannot be more than 8 characters");
      return;
    }

    if (mobile.length != 10) {
      setError("Please Enter The Ten Numbers only");
      return;
    }
    setValues([
      ...values,
      {
        name,
        fatherName,
        mobile,
        email,
        address,
        gender,
        martialStatus,
        state,
      },
    ]);
    setName("");
    setFatherName("");
    setMobile("");
    setEmail("");
    setAddress("");
    setGender("");
    setMartialStatus("");
    setState("");
    setError("");

    navigate('/result-page', { state: { values: [...values] } });


  }


  

  return (
 
    <div className="App">
      <h1>{handleSubmit}</h1>
      {/* <h1>{values}</h1> */}
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          onChange={handleChange}
          placeholder="Name"
          value={name}
        />
        FatherName :{" "}
        <input
          type="text"
          onChange={handleFatherNameChange}
          placeholder="Father Name"
          value={fatherName}
        />
        Mobile :{" "}
        <input
          type="number"
          onChange={handleMobileChange}
          placeholder="Mobile Number"
          value={mobile}
        />
        Email :{" "}
        <input
          type="email"
          onChange={handleEmailChange}
          placeholder="Email"
          value={email}
        />
        Address:{" "}
        <textarea
          type="text"
          onChange={handleAddressChange}
          placeholder="Address"
          value={address}
        />
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          <label htmlFor="female">Female</label>
          {/* {errors.gender && <span>{errors.gender}</span>} */}
        </div>
        {/* <div> */}
        <div>
          <label htmlFor="">Marital Status:</label>
          <input
            type="checkbox"
            id="single"
            name="gender"
            value="single"
            checked={martialStatus === "single"}
            onChange={handleMartialsChange}
          />
          <label htmlFor="single">single</label>
          <input
            type="checkbox"
            id="married"
            name="married"
            value="married"
            checked={matchRoutes === "married"}
            onChange={handleMartialsChange}
          />
          <label htmlFor="married">Married</label>
          {/* {errors.gender && <span>{errors.gender}</span>} */}
        </div>
        <p>You have selected: {martialStatus || matchRoutes || "Unknown"}</p>
        <div>
          <label htmlFor="state">State:</label>
          <select id="state" value={state} onChange={handleStateChange}>
            <option value=""></option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala ">Kerala</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          {/* {errors.state && <span>{errors.state}</span>} */}
        </div>
        <button type="submit">Submit</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
      {/* <ul>
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
      </ul> */}

      {/* <Routes>
          <Route path="/result" element={<ResultPage />} />
          <Route path="/" element={<Forms />} />
        </Routes> */}

     
    </div>
 
  );
}

export default Forms;