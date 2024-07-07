import categoriesToPreLoad from "@/helpers/category";
import { IProduct } from "@/types";
import Image from "next/image";
import "@/app/globals.css"

const Card: React.FC<IProduct> = ({ name, price, image, categoryId }) => {
    return (
      <div className="card-container">
        <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-8 rounded-t-lg">
            <Image src={image} alt={name} width={200} height={200} className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">{name}</h2>
            <p className="mb-3 text-gray-700">Price: ${price}</p>
            <p className="mb-3 text-gray-700">Category: {categoriesToPreLoad[categoryId]?.name}</p>
            <div className="flex space-x-4">
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-4">
            Details
          </button>
        </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;