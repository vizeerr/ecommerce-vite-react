import ProductCard from "./ProductCard";
import productsCatalog from "../lib/dummyProduct/productsCatalog";
import { Link } from "react-router-dom";


function ProductGrid() {
  return (
    <div className="mt-10">
        <div className="inline-flex items-center justify-between w-full px-3">
          <h1 className="sm:text-4xl font-medium text-center text-2xl ">| All Products</h1>
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
