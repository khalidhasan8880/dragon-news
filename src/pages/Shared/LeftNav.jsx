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
    // 'text-decoration-none d-block  mt-2 text-black ps-3 fw-bolder' 
    return (
        <div>
            <h3>News Categories</h3>
            <div>
            {
                categories.map(category=> <NavLink key={category.id}  className={({isActive})=> isActive? 'active text-decoration-none d-block  mt-2 text-black ps-3 fw-bolder': 'inactive text-decoration-none d-block  mt-2 text-black ps-3 fw-bolder'} to={`/category/${category.id}`}>{category.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default LeftNav;