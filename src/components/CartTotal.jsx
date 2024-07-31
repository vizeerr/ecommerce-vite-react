import { Button } from "flowbite-react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import generateRandomId from "../lib/helpers/generateRandomId";
import toast from "react-hot-toast";
import { clearCart } from "../lib/store/features/cartSlice";
const OrderTotal = () => {
  // Fetching total price, total items, all cart items from redux cart store
  const totalPrice = useSelector((state)=>state.cart.totalPrice)
  const totalItems = useSelector((state)=>state.cart.totalItems)
  const cartItems = useSelector((state)=>state.cart.items)
  const dispatch = useDispatch()
  
  const navigate = useNavigate();
  const Checkout = ()=>{
    const id = generateRandomId()
    const orderData ={
      items:cartItems,
      totalItems,
      totalPrice,
    }
    // setting checkout items to localstorage 
    localStorage.setItem(`orderitem-${id}`, JSON.stringify(orderData));
    // clearing cart
    dispatch(clearCart())
    toast.success("Order Processed Successfully")
    navigate(`/checkout?orderid=${id}`)
  }

  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">Rs. {totalPrice}</dd>
              </dl>


              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Total Quantity</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">{totalItems}</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">Rs. {totalPrice}</dd>
            </dl>
          </div>

          <Button onClick={Checkout} gradientDuoTone="purpleToBlue" className="p-1 w-full"> Proceed to Checkout</Button>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
              Continue Shopping
              <IoIosArrowRoundForward />
            </a>
          </div>
        </div>    
    </div>
  )
}

export default OrderTotal
