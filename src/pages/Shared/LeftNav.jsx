import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './leftNav.css'
const LeftNav = () => {
    const [categories , setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h3>News Categories</h3>
            {
                categories.map(category=> <p key={category.id}><NavLink className='text-decoration-none text-black ps-3 fw-bolder' to={`/category/${category.id}`}>{category.name}</NavLink></p>)
            }
        </div>
    );
};

export default LeftNav;