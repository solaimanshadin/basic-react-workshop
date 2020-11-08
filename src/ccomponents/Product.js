import React from 'react';

const Product = (props) => {
    return (
        <div className="col-md-4 mb-3 text-center">
            <div className="card">
                <div className="card-body">
                    <img src={props.image} className="img-fluid" alt="" />
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">${props.price}</p>
                </div>
                <div className="card-footer text-center">
                    <button 
                        onClick={() => props.cartHandler(props.price)}
                        className="btn btn-sm btn-success" 
                    >Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;