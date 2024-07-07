"use client"
import { getOrders } from "@/helpers/orders";
import { IOrder, UserSession, IProduct } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Orders = () => {
    const [userData, setUserData] = useState<UserSession>();
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userData = localStorage.getItem("userSession");
            setUserData(JSON.parse(userData!));
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const ordersResponse = await getOrders(userData?.token!);
            setOrders(ordersResponse);
        };
        userData?.token && fetchData();
    }, [userData?.token]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-10">
            <div className="w-full max-w-screen-lg bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                    <Image src="/images/compras.png" alt="logo" width={60} height={60} />
                    <h1 className="text-2xl font-bold ml-2 dark:text-white">Orders</h1>
                </div>
              {orders?.length > 0 ? (
                   <div className="flex flex-wrap justify-center gap-4">
                  {orders?.map((order) => (
                         <div
                  key={order.id}
                 className="w-64 border border-gray-200 p-4 rounded-lg flex-shrink-0">
                 <p className="text-lg font-medium">{new Date(order.date).toLocaleDateString()}</p>
                <p className="text-gray-600">Status: {order.status}</p>
                <div className="mt-4 space-y-4">
                     {order.products.map((product: IProduct) => (
                <div key={product.id} className="border p-2 rounded-lg">
                   <Image src={product.image} alt={product.name} width={100} height={100} className="rounded-lg mb-2" />
                     <p className="text-lg font-semibold">{product.name}</p>
                     <p className="text-gray-600">Price: ${product.price}</p>
                     </div>
                  ))}
                </div>
                </div>
             ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 dark:text-gray-300">
                        <p>You dont have any orders yet</p>
                        <Link href="/home">
                            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                                Buy now!
                            </button>
                        </Link>
                    </div>
                )}
                {orders?.length > 0 && (
                    <div className="mt-4 text-center">
                        <Link href="/home" className="text-blue-500 hover:underline">
                            Explore more products
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;