
import {useState, useEffect} from 'react'

import { Product } from './product'
import { useProductStore } from '../store/ProductStore'


export default function Products()   {

const {products, getproducts, loading, error} = useProductStore()


useEffect(()=>{
  getproducts()
}, [])
  return (

  <div className="max-w-7xl mx-auto px-4 py-10">
  <h1 className="text-3xl font-bold text-gray-800 mb-8">
    Product Summary
  </h1>
  <button type='button' onClick={getproducts}>
    refresh items
  </button>
{loading ? ( <p>Loading.....</p>): error ? (<p>{error}</p>):(
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.length > 0 &&
      products?.map((product) => {
        return (
        <Product product={product}/>
        
        );
      })}
  </div>
)}
</div>
  )
}
