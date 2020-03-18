import React from 'react';
import '../css/HomePage.css'
import {Link} from 'react-router-dom'


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
  }

  on
  
  render(){
    return(
  <div className='home'>
    <h1 className='title'>Baller-on-a-Budget</h1>
    
    <Link to='/signup'>
      <button className='signUp'>sign up</button></Link>
      <Link to='/signin'>    
      <button className='signIn'>sign in</button></Link>
  </div>
  )}
}



export default HomePage