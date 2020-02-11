import React from 'react';
// import { TiRadar } from 'react-icons/ti';
const Title = ({title}) => {
    return ( <div className="row" >
        <div className="col-10 mx-auto my-2 text-center text-title">
            <h1 className="text-capitalize font-weight-bold">{title}</h1>
        </div>
    </div>);
}
 
export default Title;