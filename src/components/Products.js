import React , {useState, useEffect} from 'react';
import Product from './Product';

const Products = () => {
    const [cart, setCart] = useState({count:0, price:0});
    const [products, setProducts] = useState([]);

    const cartHandler = (selectedItemPrice) => {
        const newCart = {
            count : cart.count+1,
            price: cart.price + selectedItemPrice
        }
        setCart(newCart)
    }

    useEffect(() => {
        fetch('https://red-onion-backend.herokuapp.com/foods')
        .then(data=> data.json())
        .then(res=> setProducts(res))
        .catch(err=> console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <h4>Current Cart Count : <span className="badge bg-light"> {cart.count} </span> -  <span className="badge bg-light">$ {cart.price}</span> </h4>
            <div className="row pt-5">
                {
                    products.map(product => (
                    <Product 
                        cartHandler={cartHandler} 
                        key={product._id} 
                        name={product.name} 
                        image={product.images[0]} 
                        price={product.price} 
                    />
                    ))
                }
                
            </div>
        </div>

    );
};

export default Products;