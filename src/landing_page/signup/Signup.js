import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:2000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container text-center mt-5" style={{backgroundColor: "#CDB158"}}>
      <h2 className="pt-5 pb-5">Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" style={{paddingRight: "20px", fontSize: "25px"}}>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            size={50}
            style={{height:"50px"}}
          />
        </div><br></br>
        <div>
          <label htmlFor="email" style={{paddingRight: "20px", fontSize: "25px"}}>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            size={50}
            style={{height:"50px"}}
          />
        </div><br></br>
        <div>
          <label htmlFor="password" style={{paddingRight: "20px", fontSize: "25px", textAlign:"left"}}>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            size={50}
            style={{height:"50px"}}
          />
        </div><br></br>
        <button type="submit" className=" btn btn-secondary px-3 my-2">Submit</button> &nbsp; &nbsp;
        <span className="mb-5">
          Already have an account? <Link to={"/login"} style={{color:"blue", textDecoration:"none"}}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;