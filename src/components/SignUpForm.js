import React from 'react';
import '../css/signUpForm.css' 





const SignUpForm = ({handleChange, handleSubmit}) => {


  return (
    <div>
            <form onSubmit={handleSubmit} className='signUpForm'>
        <label>Username:</label>
        <input onChange={handleChange} type="text" name="username" />
        <br/>
        <label>Password:</label>
        <input onChange={handleChange} type="text" name="password" />
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUpForm;


