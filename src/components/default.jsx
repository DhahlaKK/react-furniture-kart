import React from 'react';
const Default = (props) => {
    console.log(props);
    return ( <div className='container'>
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercase pt-5 text-title"> 
                        <h2  className="display-3">404</h2>
                        <h3 className="text-blue">Error</h3>
                        <h4>
                            the requested URL
                            <span className="text-danger">{" " + props.location.pathname + " "}</span>
                            was not found
                        </h4>
                    </div>
                </div>
            </div>
        );
}
 
export default Default;
   
