import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { addToCart } from '../redux/actions/cartActions';

const Product = (props) => {
    const dispatch = useDispatch()
    const addToCartHandler = (item) => {
        dispatch(addToCart(item))
    }
    return (

        <div className="col-md-4 mb-3 text-center">
            <div className="card">
                <div className="card-body">
                    <img src={props.image} className="img-fluid" alt="" />
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">${props.price}</p>
                </div>
                <div className="card-footer text-center">
                    <Link to={'/food/'+props.id + "/" + props.name.replaceAll(" ", "-")}
                        className="btn btn-sm btn-success" 
                    >view details</Link>

                    <button 
                    onClick={() => addToCartHandler({id: props.id, name: props.name})}
                    className="btn btn-primary ml-2">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;