import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
/*const initialState = {
     name :"",
    email:"",
    password:"",
    rePassword:"",
    passwordMissMatch:"",
    warning : ""    
    }*/
class Signup extends Component {
  /*  constructor()
    {
        super();
    this.state = { 
        users :[]
     }
    }


     changeHandle = event=>{
         this.setState(
         
        {[event.target.name] : event.target.value});
     }

    handleSubmit =event=>{
         
        event.preventDefault();
        let passwordMissMatch, warning ="";
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
                this.setState({users:array});
                this.setState(initialState);
            }
        }
        this.setState({passwordMissMatch,warning,password:"",rePassword:""})
     
    }
*/
    render() { 
        if(this.props.state.loggedin)
        {
            return <Redirect to ='/admin' />
        }
        return (  <div className="signin-body" >
        <div className="overlay">
            <form onSubmit ={this.props.onSubmit}>
                <div className="con">
                    <header className="head-form">
                        <h2>Sign Up</h2>
                    </header>
                    <br/>
                    <div className="field-set" style ={{marginLeft :'12vh'}}>
                        <input className="form-input" name ="name" type="text" value ={this.props.state.name} placeholder="Name" onChange={this.props.onChange}/>
 
                        <input className="form-input" name ="email" type="email" value ={this.props.state.email} placeholder="Email" onChange={this.props.onChange}/>
                       <div style ={{color:"red"}}>{this.props.state.warning}</div>
                        <input className="form-input" name ="password" type="password" placeholder="Password" value={this.props.state.password} onChange={this.props.onChange}/>
                        <input className="form-input" name ="rePassword" type="password" placeholder="Re-Enter Password" value={this.props.state.rePassword} onChange={this.props.onChange}/>
                        <div style ={{color:"red"}}>{this.props.state.Error}</div>
                        <div style ={{color:"red"}}>{this.props.state.passwordMissMatch}</div>
                        <button className="button-cls" style={{marginLeft:'4.5vh'}}> Sign Up </button>
                    </div>
                    
                        <Link to='/signin' className="btn submits frgt-pass" style={{marginLeft:'50vh'}}>Already a User? Sign In</Link>
                       

                    
                </div>
            </form>
        </div>
    </div>) ;
    }
}
 
export default Signup;