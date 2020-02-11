import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';
import { IoIosCart, IoIosSearch, FaHome } from 'react-icons/all';
import Collections from './collections'
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = (props) => {
    if(props.loggedin)
    {
        return(
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link   className="navbar-brand nav-content " to='/'>
                        <img className="logo" src="./Furniture_logo.png" 
                        style={{height:'60px',width:'60px'}} alt="golf"
                        />
                            FurnitureKart
                    </Link>
                    <button className="navbar-toggler toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li>
                                <input  className ="input-class" type="text" placeholder="Search" />
                                <Link to='/result'> <IoIosSearch  className="input-icons" size={30}/></Link>&nbsp;
                            </li>
                            <li>   
                                <Collections setOption={props.setOption}/>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-right">
                            <li><Link to= '/' className="icon"><FaHome size={35}/></Link></li>
                            <li><Link to = '/cart' className="icon"><IoIosCart  size={40}/></Link></li>
                        </ul>       
                        <ul className="navbar-nav navbar-right">
                            <li>
                                <Link className="bttn sign" to ='/signout' > SignOut</Link>
                            </li>
                        </ul>
                    </div> 
                </nav>
            );
    }

    return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link   className="navbar-brand nav-content " to='/'>
                    <img className="logo" src="./Furniture_logo.png" style={{height:'60px',width:'60px'}} alt="golf"/>
                    FurnitureKart
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <input  className ="input-class" style ={{marginTop:'-2px'}} type="text" placeholder="Search" />
                        <Link to='/result'>
                            <IoIosSearch  className="input-icons" style ={{marginTop:5}} size={30}/>
                        </Link>&nbsp;&nbsp;
                    </li>
                </ul>
                <ul className="navbar-nav navbar-right">
                    <li>      
                        <Link  className = 'bttn sign' to = "/signin"> SignIn</Link>
                    </li>&nbsp;&nbsp;
                    <li>
                        <Link  className = "bttn sign " to ='/signup'> SignUp</Link>
                    </li>
                </ul>
            </div>
        </nav>
        );

}
export default Navbar;