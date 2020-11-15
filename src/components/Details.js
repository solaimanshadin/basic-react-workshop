import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useAuth } from '../custom_hook/useAuth';

const Details = () => {
    console.log(useAuth()); 
    const {id, slug} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://red-onion-backend.herokuapp.com/food/'+ id)
        .then(data=> data.json())
        .then(res=> setProduct(res))
        .catch(err=> console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.images && product.images[0]} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <h4 className="mt-5 mb-3">Description</h4>
                    <p>{product.fullDescription}</p>
                </div>
            </div>
           

        </div>
    );
};

export default Details;