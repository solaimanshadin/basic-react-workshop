import React , {useState, useEffect} from 'react';
import Product from './Product';

const Products = (props) => {
    console.log();
    const [cart, setCart] = useState({count:0, price:0});
    const [products, setProducts] = useState([]);
    document.title = props.title;
    useEffect(() => {
        fetch('https://red-onion-backend.herokuapp.com/foods')
        .then(data=> data.json())
        .then(res=> setProducts(res))
        .catch(err=> console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="row pt-5">
                {
                    products.map(product => (
                    <Product 
                        key={product._id} 
                        id={product.id}
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