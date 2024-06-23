import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginValidationPage from './LoginValidationPage';
import axios from 'axios';

function LoginPage() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = LoginValidationPage(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).every((key) => validationErrors[key] === "")) {
      axios.post('http://localhost:8081/loginpage', values)
        .then(res => {
          console.log(res.data);
          if (res.data === "Success") {
            navigate('/course/catalog');
          } else {
            setErrors({ ...errors, form: "Invalid email or password" });
          }
        })
        .catch(err => console.log('Error during login:', err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded-lg shadow-lg w-50 ' style={{ borderRadius: 10 }}>
        <h2 className='text-center mb-3'>Login</h2>
        <form className="mb-2 p-3" style={{ borderRadius: 10 }} onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              id='email'
              placeholder='Enter Your Email'
              name='email'
              value={values.email}
              onChange={handleInput}
              className='form-control'
            />
            {errors.email && <div className='text-danger'>{errors.email}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              id='password'
              placeholder='Enter password'
              name='password'
              value={values.password}
              onChange={handleInput}
              className='form-control'
              autoComplete='current-password'
            />
            {errors.password && <div className='text-danger'>{errors.password}</div>}
          </div>

          {errors.form && <div className='text-danger'>{errors.form}</div>}

          <button type='submit' className='btn btn-success w-100'>
            Login
          </button>
          <div className='mt-3 text-center'>
            <span>Don't have an account? <Link to="/register">Register</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
