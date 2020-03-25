import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import { Route, BrowserRouter} from 'react-router-dom'
import SignInContainer from './Containers/SignInContainer';
import SignUpContainer from './Containers/SignUpContainer';
import UserMainPage from './components/UserMainPage';
import IncomeContainer from './Containers/IncomeContainer';
import ExpenseContainer from './Containers/ExpenseContainer';
import UserIncomeContainer from './Containers/UserIncomeContainer'
import UserExpenseContainer from './Containers/UserExpenseContainer'
import IncomeIndexContainer from './Containers/IncomeIndexContainer'
import EditIncomeForm from './components/EditIncomeForm'
import ExpenseIndexContainer from './Containers/ExpenseIndexContainer'
import EditExpenseForm from './components/EditExpenseForm'

export class App extends Component {

  state = {
    username: "alex",
    user_id: 1
  }

  signUp = (username) => {
    this.setState({
      username
    })
  }

  signIn = (username, id) => {
    this.setState({
      username,
      user_id:id
    })
  } 

  render() {
    
    return (
      <div className="App">
        {/* {this.state.username ? <h1>Hey,{this.state.username}</h1> : <h1>Hello stranger</h1>} */}
      
      <BrowserRouter>
      <Route exact path="/" render={() => <HomePage />}/>
      <Route exact path="/income-form" render={() => <IncomeContainer user={this.state.username} id={this.state.user_id} /> } />
      <Route exact path="/expense-form" render={() => <ExpenseContainer user={this.state.username} id={this.state.user_id}/> } />
      <Route exact path="/signup" render={(props) => <SignUpContainer signUp={this.signUp} navProps={props} />} />
      <Route exact path="/signin" render={(props) => <SignInContainer signIn={this.signIn} navProps={props}  />} />
      <Route exact path="/user-main-page" render={(props) => <UserMainPage username={this.state.username} id={this.state.user_id} navProps={props}/>}/>
      <Route exact path="/income-form-logged-in" render={ () => <UserIncomeContainer id={this.state.user_id}/> } />
      <Route exact path="/expense-form-logged-in" render={ () => <UserExpenseContainer id={this.state.user_id}/> } />
      <Route exact path="/all-income" render={ () => <IncomeIndexContainer id={this.state.user_id}/> } />
      <Route exact path="/income-form/:id" render={ () => <EditIncomeForm/> } />
      <Route exact path="/all-expenses" render={ () => <ExpenseIndexContainer id={this.state.user_id}/>}/>
      <Route exact path="/expense-form/:id" render={ () => <EditExpenseForm/> } />
    
      </BrowserRouter>
      
    </div>
    );
  }
}

export default App;

