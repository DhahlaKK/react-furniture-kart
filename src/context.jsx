import React, { Component } from 'react';
import {furnitures,detailProduct} from './data';

const FurnitureContext = React.createContext();

//provider
class FurnitureProvider extends Component {
    state = 
    { 
        // properties for disply products
        products: [],
        detaildProduct :detailProduct,

        //properties for added to cart
        cart : [], //initally empty cart
        modelOpen :false,
        modelProduct:detailProduct, //initally empty
        clickedCartButtonfromUnknown :false,

        //products for view cart
        cartSubTotal :0,
        cartTaxTotal :0,
        cartTotal :0
    };
    changeStateProducts = () =>
    {
        let tempProducts =[];
        furnitures.forEach(item =>{
            const singleItem = {...item}
            tempProducts =[...tempProducts,singleItem];
        });
        this.setState({products:tempProducts});
    }

    getItem = (id) =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) =>{
        const detaildProduct = this.getItem(id);
        console.log(detaildProduct);
        this.setState({detaildProduct},()=>console.log(this.state.detaildProduct))   
    }
    addToCart = (id)=>
    {
        if(this.props.state.loggedin)
        {
            let tempProducts = [...this.state.products];
            const index =  tempProducts.indexOf(this.getItem(id));
            const product = tempProducts[index];
            product.inCart = true;
            product.count = 1;
            product.total = product.price;
            this.setState({products:tempProducts,cart:[...this.state.cart,product]},
                ()=> this.addTotal());
        }
        else
            this.setState({clickedCartButtonfromUnknown:true});
    }
    changeButtonState = () =>{
        this.setState({clickedCartButtonfromUnknown:false});
    }
    openModel = id =>
    {
        if(this.props.state.loggedin)
        {
            const product = this.getItem(id);
            this.setState({
                modelProduct:product,modelOpen:true
            },
            ()=>{
                console.log('open',this.state.modelOpen)
            });
        }
    }
     

    closeModel = ()=>
    {
        this.setState({modelOpen:false});
      
    }

    incrementItem = (id) =>
    {
        let tempCart = [...this.state.products]; //actually cart
        const index = tempCart.indexOf(this.getItem(id));
        const selectedProduct = tempCart[index];
        selectedProduct.count += 1;
        selectedProduct.total = selectedProduct.price * selectedProduct.count;
        this.setState({products:tempCart},()=>
                    this.addTotal()); 
        console.log("incremented");
    }

    decrementItem = (id )=>
    {
        let tempCart = this.state.products; //
        const index = tempCart.indexOf(this.getItem(id));
        const selectedProduct = tempCart[index];
        selectedProduct.count -= 1;
        if(selectedProduct.count ===0)
        {
            this.removeItem(id);
        }
        else{
            selectedProduct.total = selectedProduct.price * selectedProduct.count;
        }
        this.setState({products:tempCart},()=>
                    this.addTotal()); 
        console.log("decremented");
    }

    removeItem = (id) =>
    {
        // item removes from cart;
        // update total
        // update same item in product;
        const tempCart = this.state.cart.filter(item => id !== item.id);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const removedProduct = tempProducts[index];
        removedProduct.count = 0;
        removedProduct.inCart = false;
        removedProduct.total = 0;
        this.setState({cart : tempCart,
                        products : tempProducts},
                ()=>{this.addTotal()});
        console.log("item removed");
    }

    clearCart = () =>
    {
        this.setState({cart:[]},
            () => {this.changeStateProducts() ;
                this.addTotal()});
        console.log("empty cart");
        
    }

    addTotal = () =>
    {
        let subTotal = 0;
        this.state.cart.forEach(item =>(subTotal += parseInt(item.total)));
        const tempTax = subTotal * 0.02;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        console.log('Total',total);
        console.log('subTotal',subTotal);
        console.log('tax',tax);
        this.setState({cartTotal:total,
                cartSubTotal:subTotal,
                cartTaxTotal:tax});
    }
    componentDidMount()
    {
        this.changeStateProducts() ;
        
    }
    render() { 
    
        return (<FurnitureContext.Provider value={{...this.state,
                                                changeStateProducts:this.changeStateProducts,
                                                detaildProduct:this.state.detaildProduct,
                                                handleDetail:this.handleDetail,
                                                handleAddToCart:this.addToCart,
                                                changeButtonState:this.changeButtonState,
                                                openModel:this.openModel,
                                                closeModel:this.closeModel,
                                                incrementItem:this.incrementItem,
                                                decrementItem:this.decrementItem,
                                                removeItem:this.removeItem,
                                                clearCart:this.clearCart}}>
        {this.props.children}
        </FurnitureContext.Provider>  );
    }
}
 const FurnitureConsumer = FurnitureContext.Consumer;
 
export  {FurnitureProvider,FurnitureConsumer}