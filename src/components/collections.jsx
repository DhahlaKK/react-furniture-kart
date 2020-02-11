import React, { Component } from 'react';
// import Select from 'react-select';
import {Link} from 'react-router-dom';
// import Home from './home'
const option = [
    { value: 'dining', label: 'Dining' },
    { value: 'sofas', label: 'Sofas' },
    { value: 'bed', label: 'Bed' },
    { value: 'chairs', label: 'Chairs' } 
  ];

  // const customStyles = {
  //   control: (base, state) => ({
  //     ...base,
  //     boxShadow:"0 0 3pt 2pt gray",
  //     '&:hover': { boxShadow: '0 0 2pt 2pt lightgray'} // border style on hover // default border color
  //     // You can also use state.isFocused to conditionally style based on the focus state
  //   })
  // };
class Collections extends Component {
    render() { 
       return (<div className='dropdown' >
                  <button className="dropbtn">Collections</button>
                  <div className="dropdown-content">
                  {option.map(item=>(<Link to={item.value} key={item.label} onClick={()=>this.props.setOption(item.value)}>{item.label}</Link>))}
                  </div>
              </div>);
        }
}
 
export default Collections;