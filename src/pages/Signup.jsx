import React,{ useState } from "react";
import FormInput from "../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: ""
  });


  const { email, password, username } = values;

  const navigate = useNavigate();


  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      pattern: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      pattern: "^[\\w]{6,}$",
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      username
    };
    console.log(userData)
    const res = await axios.post("http://localhost:5000/api/auth/register", userData)
    console.log(res.data)
    if (res.data.success==true){
      navigate('/login')
    }
  };

  const onChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const formStyle = {      
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    width: "23vw",
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow:" 0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(8.5px)",
    padding: "0px 60px",
    borderRadius: "10px"
  }
  const button = {
    marginTop: "0.5rem",
    marginBottom: "0.8rem",
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#000",
    color: "#fff",
    fontsize: "18px",
    cursor: "pointer"
  }
  return (
    <div style={{display:'flex', flexDirecrtion:'column', justifyContent:'center', alignItems:'center', height:'100vh'}}>
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1 style={{  margin: 0,marginBottom: "1rem"}}>Register</h1>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
          
        />
      ))}
      <button type="submit" style={button}>Login</button>
      <span>
        Already have an account? <Link to="/login">Login</Link>
      </span>
      <span>
      </span>
    </form>
  </div>
  )
}

export default Signup