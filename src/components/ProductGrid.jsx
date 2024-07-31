import ProductCard from "./ProductCard";
import productsCatalog from "../lib/dummyProduct/productsCatalog";
import { Link } from "react-router-dom";


function ProductGrid() {
  return (
    <div className="mt-16">
        <div className="inline-flex items-center justify-between w-full px-3">
          <h1 className="sm:text-4xl font-medium text-center text-xl ">| Our Products</h1>
        <Link to={"/all-products"}> <p className="sm:text-base text-xs text-blue-700 font-medium">View More</p></Link>
    </div>

    <div className="flex flex-wrap p-8 gap-12">
      {/* Mapping Product Data For Each Items*/}
        {productsCatalog.map(item=>(
            <ProductCard key={item.id} item={item}/>
        ))}

    </div>
    </div>
  );
}

export default ProductGrid;
