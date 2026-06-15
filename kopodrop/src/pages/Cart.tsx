import { useCartStore } from "../store/CartStore";

const CartPage = () => {
  const {
    products,
    removeCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const totalPrice = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center bg-white shadow p-4 rounded-lg mb-4"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-24 h-24 object-contain"
                />

                <div>
                  <h2 className="font-semibold">
                    {product.title}
                  </h2>

                  <p>${product.price}</p>

                  <p>
                    Subtotal: $
                    {(
                      product.price * product.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    decreaseQuantity(product.id)
                  }
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  -
                </button>

                <span className="font-bold">
                  {product.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(product.id)
                  }
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeCart(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 bg-white shadow rounded-lg p-4">
            <h2 className="text-2xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;