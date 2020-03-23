import React from 'react';
import '../css/SignInForm.css'



const SignInForm = ({ handleChange, handleSubmit }) => {
  return (
    <div>

      <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit} className='signInForm'>
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

export default SignInForm;
