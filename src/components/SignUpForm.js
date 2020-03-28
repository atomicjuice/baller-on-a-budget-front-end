import React from 'react';
import '../css/SignUpForm.css'


const SignUpForm = ({ handleChange, handleSubmit }) => {
  return (
    <div>

      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit} className='signUpForm'>
        
        <input onChange={handleChange} type="text" name="username" placeholder="username"/>
        <br />
        
        <input onChange={handleChange} type="text" name="password" placeholder="password"/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUpForm;


