import React, { Component } from 'react';
import './sign.css'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    handleForgotPassword =()=>
    {

    }
    render() { 
        if(this.props.status.loggedin)
        {
           return <Redirect to ='/admin' />
        } 
        return (
        <div className="signin-body" >
         {/* <div className="container text-center" > */}
                    <div className="overlay">
                        <form onSubmit ={this.props.onSubmit}>
                            <div className="con">
                                <header className="head-form">
                                    <h2>Sign In</h2>
                                    <p>Signin here using your username and password</p>
                                </header>
                                <br/>
                                <div className="field-set">
                                    <input className="form-input"  name ="username" type="text" value ={this.props.status.username} placeholder="@UserName" onChange={this.props.onChange}/>
                                    <br/>
                                    <div style ={{color:"red"}}>{this.props.status.usernameError}</div>
                                    
                                    <input className="form-input" name="password" type="password" placeholder="Password" value={this.props.status.password} onChange={this.props.onChange}/>
                                    <div style ={{color:"red"}}>{this.props.status.passwordError}</div>
                                    <div style ={{color:"red"}}>{this.props.status.Error}</div>
                                    <br/>
                                    <button className="button-cls" type="submit"> Sign In </button>
                                </div>
                                
                                  <Link  to="/"> <button className="button-cls  submits frgt-pass" onClick={this.handleForgotPassword}>Forgot Password</button></Link>
                                    <Link to='/signup' className="btn submits btn-blue frgt-pass" style={{marginLeft:'50vh'}}>Not a User? Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>);
    }
}
 
export default SignIn;
{/* <React.Fragment>   
            <FurnitureConsumer>{
                value =>{
                    const {clickedCartButtonfromUnknown,changeButtonState} = value;
                    if(clickedCartButtonfromUnknown)
                        changeButtonState();
                }
                }
            </FurnitureConsumer> */}