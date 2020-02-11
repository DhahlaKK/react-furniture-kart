import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import SignIn from './components/signin';
import SignUp from './components/signup';
import Admin from './components/admin';
import Signout from './components/signout';
import SelectedOption from './components/selectedOption';
import {FurnitureProvider} from './context';
import Details from './components/details';
import Modal from './components/modal';
import Cart from './components/cart/cart'
import Default from './components/default';

const initialState = {
  username : "",
  password : "",
  usernameError:"",
  passwordError:"",
  Error:"",//for signup in below
  name : "",
  email:"",
  rePassword:"",
  passwordMissMatch:"",
  warning : "" 
  
}

class App extends Component {
  constructor()
  {
    super()
    const token =localStorage.getItem("token");
    let loggedin = false;
    if(token)
    {
        loggedin = true;
    }
    this.state ={
      initialState,
      loggedin,
      users :[],
      selectedOption : 'dining'//for store users
    }
    
  }

  changeHandle = event=> //both for login and logout
  {
    this.setState(
      {
      [event.target.name] : event.target.value
    });
  }

  handleValid =()=> //for login authentication
  {
      let usernameError =null;
      let passwordError =null;
      if(!this.state.username.includes('@'))
      {
          usernameError ='Invalid Email';
      }
      if(this.state.password.length < 1)
      {
          passwordError ='Password Canot be Balnk'
      }
      this.setState({
              usernameError,passwordError
          });
      if(usernameError || passwordError)
      {   
          return false;
      }
      return true;

  }

  handleSubmitForLogin = event =>
  {
    
      const isValid = this.handleValid();
      let Error =" ";
      if(isValid && this.state.username==="dhahla@" && this.state.password==='12345678')
      {
          this.setState({loggedin:true})
          localStorage.setItem("token","loggedin")
          this.setState(initialState);
          
      }
      else if(!isValid)
      {
           //clear password
           this.setState({password :""})
      }
      else{
          Error ='Invalid Username or Pswword';
          
      }
         this.setState({
           Error
         });
      event.preventDefault();
  
  }

  changeLoginStatus =()=> //handle function for signout
  {
    localStorage.removeItem("token");
    this.setState({loggedin:false})
    return true;
  }
  
  handleSubmitForLogout = event=>{
    event.preventDefault();
    const {name,email,password,rePassword} = this.state;
    let passwordMissMatch, warning ="";
    let Eror="";

    if(!name||!email||!password||!rePassword)
    {
      Eror="Please Enter Full Details";
    }
    else
    {
      let flag =false;
      let array = this.state.users;
      for(let i =0;i<array.length;i++)
      {
          if(this.state.email === this.state.users[i].email)
          {
              flag =true;
              break;
          }
      }
      if(flag)
      {
          warning = 'Email Address is Already Registered';
      }
      else
      {
          if(this.state.password !== this.state.rePassword)
          {
              passwordMissMatch = " Your password and confirmation password do not match";
          }
          else
          {
              const newItem ={
                  name :this.state.name,
                  email:this.state.email
              }
              array.push(newItem);
              this.setState({users:array,loggedin:true})
              localStorage.setItem("token","loggedin")
              this.setState(initialState);
          }
      }
      this.setState({passwordMissMatch,warning,password:"",rePassword:""})
    }
    this.setState({passwordMissMatch,warning,password:"",rePassword:"", Error:Eror})
}
setOption = option =>{

    this.setState({
      selectedOption:option
    },
    ()=>
    console.log('option',this.state.selectedOption)
    );
}
  render() {
    return (
            <React.Fragment> 
              <FurnitureProvider state={this.state}>
                <Router>
                  <Navbar loggedin ={this.state.loggedin} setOption={this.setOption}/>
                  <main>
                    <Switch>
                      <Route exact path ="/" component ={Home} />
                      <Route path ="/signin" render={()=><SignIn status ={this.state} onSubmit ={this.handleSubmitForLogin} onChange={this.changeHandle}/>}  />
                      <Route path ="/signup" render ={()=><SignUp state={this.state} onSubmit ={this.handleSubmitForLogout} onChange={this.changeHandle}/>} />
                      <Route path ="/admin" render ={() => <Admin state={this.state} />} />
                      <Route path ="/signout" render ={()=><Signout onChangeStatus ={this.changeLoginStatus} />} />
                      <Route path={'/'+this.state.selectedOption} render={()=><SelectedOption selectedOption={this.state.selectedOption} />}/>
                      <Route path= "/details" component={Details} />
                      <Route path="/cart" render={()=><Cart loggedin = {this.state.loggedin} />}/>
                      <Route component={Default} />
                    </Switch>
                    <Modal loggedin ={this.state.loggedin}/>
                  </main>
                </Router>
               </FurnitureProvider>
            </React.Fragment>
             );
  }
}

 
export default App ;




