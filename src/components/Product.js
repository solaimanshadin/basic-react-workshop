import React from 'react';
import {Link} from "react-router-dom";

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
                    <Link to={'/food/'+props.id + "/" + props.name.replaceAll(" ", "-")}
                        className="btn btn-sm btn-success" 
                    >view details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;