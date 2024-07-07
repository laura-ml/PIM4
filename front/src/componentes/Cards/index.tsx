import { IProduct } from "@/types";
import Card from "../Card";
import Link from "next/link";

const Cards = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4 " >
      <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-2xl font-bold p-4">Products</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product) => (
            <div key={product.id} className="mb-4">
              <Link href={`/product/${product.id}`}>
               
                  <Card {...product} />
              
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;