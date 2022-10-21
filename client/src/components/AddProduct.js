import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddProduct = () => {
    const category = [
        {
            name: "Fashion",
            id: "634fec09dedfba8f4c280f51"
        },
        {
            name: "Electronic",
            id: "634fec7371047b6b80598285"
        },
        {
            name: "Grocery",
            id: "634fec7d71047b6b80598287"
        }
    ]
    const [order, setOrder] = useState({name: "", price: "", quantity: "", categoryId: ""});

    const handleChange = (e) => {
        setOrder((oldOrder)=> {
            return {...oldOrder , [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("order", order);
        const response = await fetch("http://localhost:5000/api/product/addProduct", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(order)
        });
        console.log("res", response);
    }
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                name: <input name="name" type="text" value={order.name} onChange={handleChange} />
                price: <input name="price" type="number" value={order.price} onChange={handleChange} />
                quantity: <input name="quantity" type="number" value={order.quantity} onChange={handleChange} />
                category: <Select
                                name="categoryId"
                                value={order.categoryId}
                                label="Category"
                                onChange={handleChange}
                            >
                                {category.map((item)=> {
                                    return <MenuItem key={item.id} value={item.id} >{item.name}</MenuItem>
                                })}
                            </Select>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddProduct;