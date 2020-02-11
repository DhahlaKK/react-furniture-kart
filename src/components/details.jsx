import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {furnitures} from '../data';
import { FurnitureConsumer} from '../context';
import ButtonContainer from './buttonContainer';
class Details extends Component {

    render() { 
        return (
                <FurnitureConsumer>
                    {value => {
                        const {id,name,price,imageUrl,inCart,details,catagory} = value.detaildProduct
                        return(
                                <div className="container py-5">
                                    {/* title */}
                                        <div className='col-10 mx-auto
                                        text-center text-slanted text-blue my-5'>
                                            <h1>{name}</h1>
                                        </div>
                                        {/* end title */}
                                        {/* product info */}
                                        <div className="row">
                                            <div className ='col-10 mx-auto col-md-6 my-3'>
                                                <img src = {imageUrl} className="img-fluid" alt="product"/>
                                            </div>
                                            {/* product text */}
                                            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                                <h4>Brand : {details.Brand}</h4>
                                                <h4 className="text-blue">
                                                    <strong>
                                                        price : <span>₹</span>
                                                        {price}
                                                    </strong>
                                                </h4>
                                                <h5 className="text-capitalize font-weight-bold mt-3 nb-0" style={{textDecoration:'underline'}}>
                                                    Product Features
                                                </h5>
                                                <p className="font-weight-bold mt-3 nb-0">
                                                    Dimensions:
                                                </p>
                                                {catagory === 'sofas' ? 
                                                (
                                                    <div>
                                                        <p className="col-10 text-muted lead">{details.Dimensions.value}</p>
                                                        <p className="col-10 text-muted lead">Seating Height : {details.Dimensions.SeatingHeight}</p>
                                                        <p className="col-10 text-muted lead">Seating Depth : {details.Dimensions.SeatingDepth}
                                                            <br />
                                                            (All dimensions in inches)
                                                        </p>
                                                    </div>
                                                )  
                                                :
                                                (
                                                    catagory ==='bed' ?
                                                    (
                                                        <div>
                                                            <p className="col-10 text-muted lead">{details.Dimensions.value}</p>
                                                            <p className="col-10 text-muted lead">Seating Height : {details.Dimensions.SeatingHeight}</p>
                                                        </div> 
                                                    ) 
                                                    :
                                                    (
                                                        <div>    
                                                            <p className="col-10 text-muted lead">Table : {details.Dimensions.Table}</p>
                                                            <p className="col-10 text-muted lead">Chair : {details.Dimensions.Chair}</p>
                                                            <p className="col-10 text-muted lead">Seating Height : {details.Dimensions.SeatingHeight}
                                                                <br />
                                                                (All dimensions in inches)
                                                            </p>
                                                        </div>                          
                                                    )
                                                )
                                                }
                                                <p className="font-weight-bold mt-3 nb-0">
                                                Other Info:
                                                </p>
                                                <p className="col-10 text-muted lead">Weight: {details.Weight}</p>
                                                <p className="col-10 text-muted lead">Assembly : {details.Assembly}</p>
                                                <p className="col-10 text-muted lead">Primary Material : {details.PrimaryMaterial}</p>
                                                <p className="col-10 text-muted lead">Room Type: {details.RoomType}</p>
                                                {catagory === 'bed' ?
                                                (
                                                    <p className="col-10 text-muted lead">Storage : {details.Storage}</p>   
                                                )
                                                :
                                                (
                                                    <div>
                                                    <p className="col-10 text-muted lead">Seating Capacity : {details.SeatingCapacity}</p>
                                                    <p className="col-10 text-muted lead">Top Material : {details.TopMaterial}</p>
                                                    </div>
                                                )
                                                }
                                                {/*  buttons */}
                                                <div>
                                                    <Link to='/'>
                                                        <ButtonContainer>Back To Products</ButtonContainer>
                                                    </Link>
                                                    <ButtonContainer
                                                        cart
                                                        disabled={inCart ? true : false}
                                                        onClick={()=>{
                                                            value.handleAddToCart(id)
                                                            value.openModel(id)}}>
                                                        {inCart ? "inCart" : "add to cart"}
                                                    </ButtonContainer>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            )
                        }
                    }
                </FurnitureConsumer>
                  );
            }
}
 
export default Details;
