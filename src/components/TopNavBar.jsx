import { Navbar } from "flowbite-react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function TopNavBar() {

  const totalItems = useSelector((state)=>state.cart.totalItems)
  const totalPrice = useSelector((state)=>state.cart.totalPrice)


  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ecommerce</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <Link to="/cart"> 
        <div className="flex items-center px-3 py-2 gap-2 border bg-neutral-200">
        <div className="relative">
        <CiShoppingCart size={22} />
        <p className="text-white start-3  bg-red-600 px-1 rounded-full m-0  text-center text-xs absolute -top-2">{totalItems}</p>
        </div>
        <p className="font-medium text-red-500">Rs.{totalPrice}</p>
        </div>
        </Link>
        {/*Responsive Navbar Toggle Button*/}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* All Links */}
        <Navbar.Link>
        <Link to="/" active>
          Home
        </Link>
        </Navbar.Link>
        <Navbar.Link>
        <Link to="/all-products">All Products</Link>
        </Navbar.Link>
        <Navbar.Link>
        <Link to="/cart">Cart</Link>
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}
