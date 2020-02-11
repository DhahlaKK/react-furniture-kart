if(props.loggedin)
    {
        return (<nav className="navbar navbar-dark bg-dark" >
            <Link  to='/'><img className="logo" src="./Furniture_logo.png" style={{height:'60px',width:'60px'}} alt="golf"/></Link>
            <div  className='nav-content navbar-brand' >FurnitureKart</div>
            <input  className ="input-class" type="text" placeholder="Search" size = "40"/>
           <Link> <IoIosSearch ID="Wrapper" className="input-icons"size={30}/></Link>&nbsp;
          <Collections/>
            <Link to ='/admin' ><IoIosCart className="icon" size={50} style={{color:'white'}}/></Link>
            <Link  className="sign signup" to ='/signout' > SignOut</Link>
        
        </nav>)
    }
    return (<nav >
        <Link to='/'> <img className="logo" src="./Furniture_logo.png" style={{height:'60px',width:'60px'}} alt="golf"/></Link>
        <span className='nav-content' >FurnitureKart</span>
        <input className ="input-class" type="text" placeholder="Search" size = "40"/>
   <Link> <IoIosSearch   className="input-icons"  size={30} /></Link>&nbsp;
        <Link  className='sign signin' to = "/signin"> SignIn</Link>
        <Link  className="sign signup" to ='/signup'> SignUp</Link>
    </nav>)
    // const Dining = () => {
//     return ( <div className="App App-fst-div dining-set" ><h2>ALL DINING SETS </h2>
   
//     {furnitures.map((item)=>
//      (<div className="gallery" key ={item.name}>
//          <Link to='/details'>
//              <img src={item.imageUrl} alt="product" ></img>
//              <div className="description">{item.name}</div>
//              </Link>
//              Rs.{item.price}
//     </div> ))}
      
// </div> );
// }

const furnitures = [
    {
    name : 'Moe 4 Seater Dining Set in Wenge Finish by Mintwud',
    price: '17000',
    imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/m/o/494x544/moe-four-seater-dining-set-in-wenge-finish-by-mintwud-moe-four-seater-dining-set-in-wenge-finish-by--zgtvyg.jpg'
    },
    {
    name : 'Mariko 6 Seater Dining Set In Walnut Finish',
    price: '15294',
    imageUrl:'https://ii3.pepperfry.com/media/catalog/product/m/a/236x260/mariko-six-seater-dining-set-in-walnut-finish-by-mintwud-mariko-six-seater-dining-set-in-walnut-fini-s8annh.jpg'
    },
    {
    name : 'Momoko 6 Seater Dining Set In Walnut Finish',
    price: '14819',
    imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/m/o/236x260/momoko-six-seater-dining-set-in-walnut-finish-by-mintwud-momoko-six-seater-dining-set-in-walnut-fini-k1vevf.jpg'
    },
    {
    name : 'Momoko 2 Seater Dining Set In Walnut Finish',
    price: '5524',
    imageUrl: 'https://ii1.pepperfry.com/media/catalog/product/m/o/236x260/momoko-two-seater-dining-set-in-walnut-finish-by-mintwud-momoko-two-seater-dining-set-in-walnut-fini-rh5hf2.jpg'
    }]