import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="body-div">
      <div className="form-container">
        <h2>Registro</h2>
        <form onSubmit={handleRegister}>
          <div className='div_input'>
            <label className="label">Nombres:</label>
            <input type="Text" required />
          </div>
          <br>
          </br>
          <div className='div_input'>
            <label className="label">Apellidos:</label>
            <input type="Text" required />
          </div>
          <br>
          </br>
          <div className='div_input'>
            <label className="label">Edad:</label>
            <input type="number" required />
          </div>
          <br>
          </br>
          <div className='div_input'>
            <label className="label">Email:</label>
            <input type="email" required />
          </div>
          <br>
          </br>
          <div className='div_input'>
            <label className="label">Password:</label>
            <input type="password" required />
          </div>
          <button type="submit">Registrarce</button>
        </form>
        <Link to="/products">Iniciar sesión</Link>
      </div>
    </div>
  );
}

export default Register;
