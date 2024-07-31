import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../lib/store/features/cartSlice';
import toast from 'react-hot-toast';
import { LuMinus, LuPlus } from 'react-icons/lu';

function ProductCard({ item }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    // Find the item in the cart and set its quantity
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [cartItems, item.id]);

  const addItem = (item) => {
    if (quantity > 0) {
      // If the item is already in the cart, increase the quantity
      dispatch(addToCart({ ...item, quantity: 1 }));
      setQuantity(quantity + 1);
    } else {
      // If the item is not in the cart, add it with quantity 1
      dispatch(addToCart({ ...item, quantity: 1 }));
      setQuantity(1);
    }
    toast.success('Item Added to Cart');
  };

  const removeItem = (item) => {
    if (quantity > 1) {
      // If the quantity is greater than 1, decrease the quantity
      dispatch(addToCart({ ...item, quantity: -1 }));
      setQuantity(quantity - 1);
    } else {
      // If the quantity is 1, remove the item from the cart
      dispatch(removeFromCart(item));
      setQuantity(0);
    }
    toast.success('Item Removed from Cart');
  };

  return (
    <div className="w-64 border py-4 px-3 rounded-xl mx-auto">
      <img src={item.image} className="w-full" alt={item.title} />
      <h5 className="text-lg font-semibold text-gray-800">
        {item.title}
      </h5>

      <div className="flex items-center justify-between mt-5">
        <p className="text-2xl font-bold text-gray-900">Rs. {item.price}</p>
        {quantity === 0 ? (
          <Button
            gradientDuoTone="purpleToBlue"
            pill
            onClick={() => addItem(item)}
            className="p-0 font-medium"
          >
            Add to cart
          </Button>
        ) : (
          <div className="flex items-center">
            <button
              onClick={() => removeItem(item)}
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <LuMinus />
            </button>
            <p className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
              {quantity}
            </p>
            <button
              onClick={() => addItem(item)}
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <LuPlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Prop validation for ProductCard component
ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
