import React from 'react';
import { Link } from 'react-router-dom';
const CartTotal = ({value}) => {

    const {cartTotal,cartTaxTotal,cartSubTotal,clearCart} = value;

    return (<React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 
                text-capitalize text-right">
                    <h5>
                    <span className ="text-title text-blue">
                        subtotal : 
                    </span>
                    <strong className="text-blue">₹ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                    <span className ="text-title text-blue">
                        Taxtotal : 
                    </span>
                    <strong className="text-blue">₹ {cartTaxTotal}</strong>
                    </h5>
                    <h5>
                    <span className ="text-title text-blue">
                        total : 
                    </span>
                    <strong className="text-blue">₹ {cartTotal}</strong>
                    </h5>
                    <Link to ='/'>
                        <button 
                        className="btn btn-outline-danger text-uppercase
                        nb-3 px-5"
                        type="button"
                        onClick={()=>clearCart()}
                    >
                        clear cart
                    </button>
                    </Link>

                </div>

            </div>
        </div>
    </React.Fragment>)
}
 
export default CartTotal;