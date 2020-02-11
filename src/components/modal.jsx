import React, { Component } from 'react';
import { FurnitureConsumer } from '../context';
import styled from 'styled-components';
import ButtonContainer from './buttonContainer';
import {Link, Redirect} from 'react-router-dom';
class Modal extends Component {
    render() { 
       return(<FurnitureConsumer>
         {value =>{
            const {modelOpen,modelProduct,clickedCartButtonfromUnknown,changeButtonState} = value;
            const {loggedin} = this.props;
            // console.log('modal',modelProduct);
            const {imageUrl,price,name} = modelProduct
            // console.log("is login ?",loggedin)
            // console.log("clickedCartButtonfromUnknown",clickedCartButtonfromUnknown);
            if(!loggedin && clickedCartButtonfromUnknown)
            {
                 changeButtonState();
                 return <Redirect to ='/signin'/>    
            }
            if(!modelOpen)
            { 
                return null ;
            }
            else{ 
                  
                return (
                    <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-6 mx-auto col-md-6
                                     col-lg-3 text-center text-capitalize p-4">{/* col-md-8*/}
                                    <h5>item added to the cart </h5>
                                    <img src = {imageUrl} className="img-fluid" alt="modal"/>
                                    <h5>{name}</h5>
                                    <h5 className="text-muted">price : ₹ {price}</h5>
                                    <Link to="/">
                                    <ButtonContainer onClick={value.closeModel}>
                                        continue shopping
                                    </ButtonContainer>
                                    </Link>
                                    <Link to="/cart">
                                    <ButtonContainer onClick={value.closeModel} cart>
                                        Go to cart
                                    </ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                )
            }
            }}
        </FurnitureConsumer>)
    }
}
  
export default Modal ;
 const ModalContainer =styled.div`
 {
     
     position:fixed;
     top:0;
     left:0;
     right:0;
     bottom:0;
     background:rgba(0,0,0,0.3);
     display:flex;
     align-items: center;
     justify-content : center;
     #modal {
         background:var(--mainWhite);
     }

 }`