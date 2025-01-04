
// TODO: Server side 

import React from 'react'
import ProductLayout from './productLayout'
import { MakeAPIGET } from '@/utils/utility';

export default async function ProductList() {
    
    const data =await MakeAPIGET()

  return (
    
    <div>
        <h1>Products</h1>
        <ProductLayout data={data}/>
    </div>
  )
}
