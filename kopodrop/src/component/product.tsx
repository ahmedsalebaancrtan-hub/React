import type { IProducts } from '../types/products'
import { Button } from './Button'

export const Product = ({product} : {product : IProducts}) => {
  return (
    <div>
         <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full object-contain hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-5">
              <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {product.title}
              </h1>

              <div className="flex items-center gap-3 mt-3">
                <p className="text-2xl font-bold text-indigo-600">
                  ${product.price}
                </p>

                <p className="text-sm text-red-500 font-medium bg-red-100 px-2 py-1 rounded-full">
                  {product.discountPercentage}% OFF
                </p>
              </div>
<Button color="blue" text="Add To Cart" />
              
            </div>
          </div>
    </div>
  )
}

