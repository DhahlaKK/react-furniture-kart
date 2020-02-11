import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class Admin extends Component {
    render() { 
        if(!this.props.state.loggedin)
        {
            return <Redirect to='/signin'/>
        }
        return ( 
            <React.Fragment>
            {/* <div className="App App-fst-div" > */}
            <div className="container text-center" >
            <h1> Welcome to admin page</h1>
            </div>
            </React.Fragment>
                
         );
    }
}
 
export default Admin;