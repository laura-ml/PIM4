"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserSession } from "@/types";
import { usePathname } from "next/navigation";
import "@/app/globals.css"

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [userData, setUserData] = useState<UserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    localStorage.removeItem("cart");
    setUserData(undefined);
    router.push("/");
  };

  const isInHomePage = pathname === "/";
  const isInLoginPage = pathname === "/login";

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <Image src="/images/logo.png" alt="logo" width={60} height={60} />

        {!isInHomePage  && !isInLoginPage && (
          <div className="flex">
            <Link className="flex items-center hover:bg-blue-400 text-white" href="/home">Home</Link>
            {userData?.token ? (
              <Link className="hover:bg-blue-400 p-2 rounded text-white" href="/dashboard" style={{ marginLeft: "4rem" }}>Me</Link>
            ) : (
              <></>
            )}
          </div>
        )}
        <div className="flex items-center px-4">
          <Link href="/cart">
            <Image src="/images/carrito.png" alt="cart" width={40} height={40} className="cursor-pointer" />
          </Link>
          {userData?.token ? (
            <button
              onClick={handleLogout}
              className="hover:bg-blue-400 text-white p-2 rounded">Logout</button>
          ) : (
            <Link className="hover:bg-blue-400 p-2 rounded text-white" href="/login">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
