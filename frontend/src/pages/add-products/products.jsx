import { useState } from "react";
import {UploadProducts} from "../../service/api";
import './products.css'
import Cookies from 'js-cookie';

import { NavLink } from 'react-router-dom';



function AddProducts(){

        const [message, setMessage] = useState('');
        const [name, setName] = useState('');
        const [price, setPrice] = useState('');
        const [image, setImage] = useState(null);
        const [description, setDescription] = useState('');
        const [category, setCategory] = useState('');
        const [quantity, setQuantity] = useState('');
        const [Error,SetError] = useState({});


        const handleSubmit = async (e) => {
        e.preventDefault();
        SetError({});
        

        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('quantity', quantity);
        formData.append('image', image);
        console.log("------------------error------------------------");
        console.log(formData)

          try {
            const token = Cookies.get('token');
            console.log(`token : ${token}`)
            const response = await UploadProducts(formData,token);
            console.log(response);
            SetError('')
            setMessage(response.data.msg)
            
            setName("");
            setPrice("");
            setImage('');
            setDescription("");
            setCategory("");
            setQuantity("");
            
          } catch (error) {
                console.log("------------------------------------error------");
                setMessage('');
                console.log(error);
                const {name,price, description,category,quantity} = error.response.data
                SetError({ name: name, price: price, description: description,category:category,quantity:quantity,msg: error.response.data.msg });
          }


        }

    return(
        <div className="pro-upload-product-container">
            <h1>Upload Product</h1>
            <form onSubmit={handleSubmit}>

            <div className="pro-form-group">
            <label htmlFor="name">Product Name:</label>
            <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e)=>setName(e.target.value)} 
            required 
            />
            {Error.name && <p className="error-text">{Error.name}</p>}
        </div>

            <div className="pro-form-group">
                <label htmlFor="name">Description:</label>
                <input 
                type="text" 
                id="name" 
                value={description} 
                onChange={(e)=>setDescription(e.target.value)} 
                required 
                />
                {Error.description && <p className="error-text">{Error.description}</p>}
            </div>

            <div className="pro-form-group">
            <label htmlFor="price">Product Price:</label>
            <input 
            type="number" 
            id="price" 
            value={price} 
            onChange={(e)=>setPrice(e.target.value)} 
            required 
            />
             {Error.price && <p className="error-text">{Error.price}</p>}
            </div>

            <div className="pro-form-group">
            <label htmlFor="category">Category: </label>
            <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            >
            <option value="">Select a category</option>
            <option value="prescription">Prescription</option>
            <option value="reading">Reading</option>
            <option value="blue-light">Blue Light</option>
            <option value="progressive">Progressive</option>
            <option value="sunglassess">Sunglassess</option>
            <option value="bifocal">Bifocal</option>
            <option value="sports">Sports</option>
            <option value="fashion">Fashion</option>
            </select>
            {Error.category && <p className="error-text">{Error.category}</p>}
        </div>
            
            <div className="pro-form-group">
            <label htmlFor="name">Quantity : </label>
            <input 
            type="number" 
            id="name" 
            value={quantity} 
            onChange={(e)=>{setQuantity(e.target.value)}} 
            required 
            />
        {Error.quantity && <p className="error-text">{Error.quantity}</p>}
            </div>

            <div className="pro-form-group">
                <label htmlFor="image">Product Image:</label>
                <input
                    type="file"
                    id="image"
                    onChange={(e) => setImage(e.target.files[0])} // Correctly set the image file
                    required
                />
            </div>

        <button type="submit">Upload</button>
        <NavLink to="/admin" state={{textDecoration: 'none' }}>
                <button type="submit">Back to Admin</button>
            </NavLink>
        </form>
        
        {message && <p> {message} </p>}
        {Error.msg && <p> {Error.msg} </p>}
        <div>
         
        </div>
    </div>
    );
}

export default AddProducts;