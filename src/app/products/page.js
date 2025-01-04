
// TODO: Client Side

'use client'

import React, { useEffect, useState } from "react";
import ProductsLayout from './productsLayout'
import { MakeAPIGET } from '@/utils/utility';

export default function ProductsList() {
    
      const [product, setProduct] = useState([]);

    
    useEffect(async () => {
      let data = await fetch("https://dummyjson.com/products");
      data= await data.json();
      
      // data = await data.json();
      setProduct(data.products);
    }, []);

  return (
    
    <div>
        <h1>Products</h1>
        <ProductsLayout data={product}/>
    </div>
  )
}
