
import {useState, useEffect} from 'react'
import type { IProducts } from '../types/products'
import { Product } from './product'


export default function Products()   {

const   [products, setproducts] =   useState<IProducts[]>([])

const getproducts = async () => {

  const response  = await fetch("https://dummyjson.com/products")
  const data  = await  response.json()

  console.log(data)

  setproducts(data.products)
   
}


useEffect(()=>{
  getproducts()
}, [])
  return (

  <div className="max-w-7xl mx-auto px-4 py-10">
  <h1 className="text-3xl font-bold text-gray-800 mb-8">
    Product Summary
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.length > 0 &&
      products?.map((product) => {
        return (
        <Product product={product}/>
        
        );
      })}
  </div>
</div>
  )
}
