import React, { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';

const Products = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-5 text-red-900'>Our Product :{products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-3'>
                {
                    products.map(product => <ProductCard 
                     key={product.id} 
                     product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;