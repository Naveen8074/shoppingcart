import {useState} from 'react'
import './index.css'

const Products = [
    { id: 1, name: "Laptop", price: 500 , quantity:0},
    { id: 2, name: "Smartphone", price: 300 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Smartwatch", price: 150 },
    { id: 5, name: "Camera", price: 300 },
    { id: 6, name: "Wiredearphones", price: 350 },
    { id: 7, name: "Mobilecase", price: 150 },
    { id: 8, name: "Adapter", price: 300 },
    { id: 9, name: "Datacable", price: 150 },
    { id: 10, name: "Temperedglass", price: 150 },
    { id: 11, name: "Pendrive", price: 500 },
    { id: 12, name: "Harddisc", price: 250 },
    // { id: 13, name: "mousepad", price: 100 },
    // { id: 14, name: "Keyboardcover", price: 250 },
  ];
  
const Home = () => {

const addButton = () => {
    
}

    return(
        <div>
            <h1>Shopping Cart</h1>
            <div className="products-main-container">
                <h1 className="product-heading">Products</h1>
                <ul className="un-orderd-container">
                {Products.map(prevProduct=>(
                    <li key={prevProduct.id} className="list-container">
                        <p className="product-name">{prevProduct.name}</p> 
                        <p className="price-text">₹{prevProduct.price}</p>
                        <button className="add-to-cart-button" onClick={() => addButton(prevProduct.id)}>Add to cart</button></li>
                ))}
                </ul>
            </div>
            <h1 className="heading-of-cart-summary-text">Cart Summary</h1>
            <div className="sub-total-container">
                <div className="sub-total-text-container">
                <p>Subtotal:</p>
                <p>₹0</p>
                </div>
                <hr className="horizontal-line"/>
                <div className="free-gife-container">
                    <p className="free-gift-text">Add ₹1000 more to get FREE Wireless Mouse!</p>
                    <progress className="progress-bar" value={0} />
                </div>
            </div>
            <div className="cart-container">
                <p className="empty-cart-text">Your cart is empty</p>
                <p className="add-some-prod-text">Add some products to see them here</p>
            </div>
        </div>
    )
}

export default Home