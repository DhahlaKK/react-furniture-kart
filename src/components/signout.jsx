
import {Redirect} from 'react-router-dom'
import React, { Component } from 'react';
import { FurnitureConsumer } from '../context';
class Signout extends Component {
    render()
    {
        return <FurnitureConsumer>
            {value => {
                const {changeStateProducts,clearCart } = value;
                changeStateProducts();
                clearCart();
                return  (this.props.onChangeStatus())?<Redirect to='/'></Redirect>:<Redirect to='/admin'/>
            }}
            
        </FurnitureConsumer>
        
    }
}
export default Signout;