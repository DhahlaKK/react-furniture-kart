import React, { Component } from 'react';
import Title from './title';
// import {furnitures} from '../data';
import {FurnitureConsumer} from '../context';
import Product from './product';
class ProductList  extends Component { 
    render() { 
        // console.log(this.state.products);
        return ( <React.Fragment>
                <div className="py-4">
                    <div className="container ">
                        <Title title="Our Prodcuts"/>
                        <div className="row-1">
                        <FurnitureConsumer>
                            { value =>{
                               return  value.products.map(
                                    product=>
                                    {
                                        return (
                                            <div className="col-8 mx-auto col-md-6 col-lg-3 my-4">
                                            <Product key ={product.id} product = {product}> </Product>
                                            </div>
                                        )
                                    }
                                )
                            }
                        }
                        </FurnitureConsumer>
                        </div>
                    </div>
                </div>
        </React.Fragment> );
    }
}
 
export default ProductList ;