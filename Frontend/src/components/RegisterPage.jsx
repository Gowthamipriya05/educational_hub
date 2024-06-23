import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterValidation from './RegisterValidation';
import axios from 'axios';

function RegisterPage() {
  const [values, setValues] = useState({
    fname: '',
    lname: '',
    contact: '',
    password: '',
    dob: '',
    address: '',
    email: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = RegisterValidation(values);
    setErrors(validationErrors);
  console.log(validationErrors)
    // Check if there are any validation errors
    const hasErrors = Object.values(validationErrors).some((error) => error !== "");
  
    if (!hasErrors) {
      console.log("No validation errors, submitting form...");
      axios.post('http://localhost:8081/registerpage', values)
        .then(res => {
          console.log("Backend Response: ", res.data);
          navigate('/course/catalog');
        })
        .catch(err => console.log("Error: ", err));
    }
  };
  

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded-lg shadow-lg w-50' style={{ borderRadius: 10 }}>
        <h2 className='text-center mb-3'> Register </h2>
        <form className='mb-2 p-3' onSubmit={handleSubmit} style={{ borderRadius: 10 }}>
          <div className='mb-3'>
            <label htmlFor='fname'><strong>First Name</strong></label>
            <input
              type='text'
              id='fname'
              placeholder='Enter Your first name'
              name='fname'
              value={values.fname}
              onChange={handleInput}
              className='form-control'
            />
            {errors.fname && <div className='text-danger'>{errors.fname}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='lname'><strong>Last Name</strong></label>
            <input
              type='text'
              id='lname'
              placeholder='Enter Your last name'
              name='lname'
              value={values.lname}
              onChange={handleInput}
              className='form-control'
            />
            {errors.lname && <div className='text-danger'>{errors.lname}</div>}
          </div>

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
            <label htmlFor='contact'><strong>Mobile Number</strong></label>
            <input
              type='number'
              id='mobile'
              placeholder='Enter mobile number'
              name='mobile'
              value={values.mobile}
              onChange={handleInput}
              className='form-control'
            />
            {errors.contact && <div className='text-danger'>{errors.contact}</div>}
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
            />
            {errors.password && <div className='text-danger'>{errors.password}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='dob'><strong>Date of Birth</strong></label>
            <input
              type='date'
              id='dob'
              name='dob'
              value={values.dob}
              onChange={handleInput}
              className='form-control'
            />
            {errors.dob && <div className='text-danger'>{errors.dob}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='gender'><strong>Gender</strong></label>
            <select
              id='gender'
              name='gender'
              value={values.gender}
              onChange={handleInput}
              className='form-control'
            >
              <option value='' disabled>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
            {errors.gender && <div className='text-danger'>{errors.gender}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='address'><strong>Address</strong></label>
            <input
              type='text'
              id='address'
              placeholder='Enter Your address'
              name='address'
              value={values.address}
              onChange={handleInput}
              className='form-control'
            />
            {errors.address && <div className='text-danger'>{errors.address}</div>}
          </div>

          <button type='submit' className='btn btn-success w-100'>
            Register
          </button>
          <div className='mt-3 text-center'>
            <span>Already have an account?<Link to="/login">Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;