import { create } from "zustand";
import type { IProducts } from "../types/products";

interface ProductStore{
    products : IProducts[],
    getproducts : () => void,
    loading : boolean,
    error : string 
}

export const useProductStore = create <ProductStore>((set) => ({
    products : [],
    loading : false,
    error : "",
    getproducts : async () => {  
   try {
     set({loading : true, })   
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()

        set({products : data.products, loading : false,})
    
   } catch (error) {
      console.log("something went wrong please check the error", error)

        set({
            loading : false,
            error : "something went wrong please try again later"
        })
    
   }

    },
}))
