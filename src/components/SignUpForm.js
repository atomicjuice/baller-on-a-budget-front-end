import React from 'react';
import '../css/SignUpForm.css'


const SignUpForm = ({ handleChange, handleSubmit }) => {
  return (
    <div>

      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit} className='signUpForm'>
        <label>Username:</label>
        <input onChange={handleChange} type="text" name="username" />
        <br />
        <label>Password:</label>
        <input onChange={handleChange} type="text" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUpForm;


