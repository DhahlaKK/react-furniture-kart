import React, { Component } from 'react';
import ProductList from './productList';
class Home extends Component {
        state = { 
                furnitures:[{
                        name :'Odessa Solid Wood 2 Seater Sofa',
                        price:'36843',
                        imageUrl:'https://ii2.pepperfry.com/media/wysiwyg/banners/01_web_mas_Furniture_30122019.jpg'
                }]
        }

        render() { 
                return  (<React.Fragment>  <div className="container" >
                         {/* {this.state.furnitures.map((item)=><img src={item.imageUrl}  alt=""></img>)}      */}
                <ProductList/>
                </div>
                </React.Fragment> );  
        }
}
export default Home;