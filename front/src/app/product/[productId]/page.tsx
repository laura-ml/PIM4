"use client"
import { getProductById } from "@/helpers/product.peticion"
import { IProduct, UserSession } from "@/types"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"


const  DetailProduct = ({params}: {params: {productId: string}})   => {
   const router = useRouter() 
   const [product, setProduct] = useState<IProduct>()
   const [userData, setUserData] = useState<UserSession>();

   useEffect(()=> {

     if(typeof window !== "undefined" && window.localStorage ) {

     const userData = localStorage.getItem("userSession")
     setUserData(JSON.parse(userData!))

     }

     const fetchData = async () => {
       const product = await getProductById(params.productId)
       setProduct(product)
     }

     fetchData()
   }, [])

    const handleAddToCart = (e: any) => {
  if(!userData?.token) {
    alert ("You must be logget to buy")
  } else {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const productExist = cart.some((product: IProduct) => {

    if(product.id === Number(e?.target?.id)) return true;
    return false;
    })

    if(productExist) {
     alert ("This product is already in your cart")
     router.push("/cart")
    } else {
      cart.push(product)
     localStorage.setItem("cart", JSON.stringify(cart))
     alert ("Product added")
     router.push("/cart")
    }
  }
    }

    return (
      <div className="w-full flex items-center justify-center flex-col p-4">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">{product?.name}</h2>
          <Image src={product?.image} alt={product?.name} width={300} height={300} className="rounded-lg mb-4" />
          <p className="text-gray-700 mb-4 text-center"><span className="font-semibold">Description:</span> {product?.description}</p>
          <p className="text-gray-700 mb-2 text-center"><span className="font-semibold">Price:</span> ${product?.price}</p>
          <p className="text-gray-700 mb-2 text-center"><span className="font-semibold">Stock:</span> {product?.stock}</p>
         
          {userData?.token ? (
               <button
               id={product?.id.toString()}
               onClick={handleAddToCart}
               className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 mt-4">
               Add to cart!
             </button>
          ):(
            <Link
            href="/login"
            className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 mt-4">
            Sign in to shop
          </Link>
          )}
         
        </div>
      </div>
    );
  };
  
  export default DetailProduct;