import React from 'react';
import '../css/SignInForm.css'



const SignInForm = ({ handleChange, handleSubmit }) => {
  return (
    <div>

      <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit} className='signInForm'>
        
        <input onChange={handleChange} type="text" name="username" placeholder="username"/>
        <br />
        
        <input onChange={handleChange} type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignInForm;
