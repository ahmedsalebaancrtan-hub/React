import { Link } from "react-router-dom";
import { useCartStore } from "../store/CartStore";

export const CartCounter = () => {
  const totalItems = useCartStore(
    (state) => state.products.length
  );

  return (
    <Link to="/cart">
      <div className="relative">
        <span className="text-2xl">🛒</span>

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
};