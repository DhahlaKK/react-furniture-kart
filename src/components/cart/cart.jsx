import React, { Component } from 'react';
import Title from '../title';
import CartColumns from './cartColumns';
import EmptyCart from './emptyCart';
import { FurnitureConsumer } from '../../context';
import CartList from './cartList';
import CartTotal from './cartTotal';
import { Redirect } from 'react-router-dom';
class Cart extends Component {
    
    render() { 
        if(!this.props.loggedin)
            return <Redirect to ='/signin'/>
        return (
                <section>
                    <FurnitureConsumer>
                        {
                            value =>{
                                const {cart} =value;
                                console.log("cart",cart);
                                if(cart.length > 0)
                                {
                                    return (
                                        <div>
                                            <Title title=" Your Cart"/>
                                            <CartColumns/>
                                            <CartList value={value} />
                                            <CartTotal value ={value} history={this.props.history} />
                                        </div>
                                    )
                                }
                                else
                                    return   <EmptyCart/>;
                                }
                        }
                    </FurnitureConsumer>
                </section>
            );
    }
}
 
export default Cart;