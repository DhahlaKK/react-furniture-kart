import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { IoIosCart } from 'react-icons/all';
import styled from 'styled-components';//styled components
import { FurnitureConsumer } from '../context';

class Product extends Component {
    render() { 
        const {id,name,inCart,price,imageUrl} = this.props.product;
        return (
            <Wrapper>
            {/* <div className="col-8 mx-auto col-md-6 col-lg-3 my-4"> */}
            {/* <div className="col-8 col-md-2 col-lg-8 my-4"> */}
                <div className="card" >
                <FurnitureConsumer>
                    {value =>(<div
                     className="img-container p-4"
                     onClick={()=>value.handleDetail(id)}>
                    <Link to="/details">
                        <img src={imageUrl} alt="product" className="card-img-top" />
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true: false} 
                       onClick={()=>{
                        value.handleAddToCart(id)
                        value.openModel(id)
                    }}>
                    {inCart ? (<p className="text-capitalize mb-0" disabled>
                            {" "}
                            inCart
                            </p>):
                            (
                            <IoIosCart  size={23}/>
                            )
                    }
                     </button>
                    </div>)}
                    
                     </FurnitureConsumer>
                     {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{name}</p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">₹</span>
                                {price}
                            </h5>
                    </div>
                </div>
            {/* </div> */}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
.card{
    border-color: transparent;
  
}
.card-footer{
    

    border-top: transparent;
  }
&:hover
{
    .card
    {
        border:0.06rem solid rgba(0,0,0,0.2);
        box-shadow :2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer
    {
       
        color:black;
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
  
    
}
.img-container:hover .card-img-top{
    transform :scale(1.3,1.5);
}
.cart-btn{
    position:absolute;
    left:0;
    top:0;
    padding:0.25rem 0.25rem;
    background-color:var(--lightBlue);
    color:white;
    font-size:0.75rem  ;
    border-radius:1rem 0 1rem  0;
    transform :translate(-100%,-100%);
    transition:all 1s linear;
}
.img-container:hover .cart-btn{
    transform :translate(0,0); 
}
.cart-btn:hover{
    background-color:var(--mainBlue);
   // cursor:pointer;
}
`
export default Product;