import React from 'react';
import { FurnitureConsumer } from '../context';
import Title from './title';
import Product from './product';

const SelectedOption = (props) => {
    return (
        <FurnitureConsumer>
            {
                value =>{
                    const {products} = value;
                    const filterdProducts = products.filter(item =>item.catagory ===props.selectedOption);
                 return (
                    <div className="container">
                        <div className="py-4">
                            <Title  title={'All ' + props.selectedOption + (props.selectedOption!=='bed' ? " Set" : "s")} />
                            <div className="row">
                                {filterdProducts.map(item =>
                                    (
                                    <div className="col-8 col-lg-3 mx-auto col-md-3 my-5">
                                        <Product key ={item.id} product={item}/>
                                    </div>
                                    )
                                )
                                }
                            </div>
                        </div>
                     </div>
                    )    
                }
            }
        </FurnitureConsumer>
    )
}
 
export default SelectedOption;