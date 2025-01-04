
// TODO: Server side 

import React from 'react'
import ProductLayout from './productLayout'
import { MakeAPIGET } from '@/utils/utility';
import ProductEvents from './productEvents';

export default async function ProductList() {
    
    const data =await MakeAPIGET()

  return (
    
    <div>
        <h1>Products</h1>
        <ProductEvents/>
        <ProductLayout data={data}/>

    </div>
  )
}
