import React, { useRef } from 'react';

const Admin = () => {

    const name = useRef();
    const price = useRef();
    const image = useRef();

    const handleSubmit = () => {
        const data = {
            name : name.current.value,
            price: price.current.value,
            image: image.current.value
        }
        fetch('http://localhost:8080/add-product', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            "authorization" : sessionStorage.getItem("idToken")
        },
        body: JSON.stringify(data),
        })
    }
    return (
        
        <div className="row container ">
            <div className="col-md-4 bg-light py-5"
            style={{height: '100vh'}}
            >
                <ul className="list-unstyled">
                    <li>Add Product</li>
                    <li>Add Product</li>
                    <li>Add Product</li>
                </ul>
            </div>
            <div className="col-md-8 py-5">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input ref={name} className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">price</label>
                    <input ref={price} className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Image URL</label>
                    <input ref={image} className="form-control" type="text" />
                </div>
                
                <button type="button"
                onClick={handleSubmit}
                 className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Admin;