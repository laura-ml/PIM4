"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BackgroundImageContainer } from "@/componentes/Landing/styledComponent";
import { UserSession } from "@/types";

const LandingPage = () => {
  const [userData, setUserData] = useState<UserSession>();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }
  }, []);

  // const getRedirectLink = () => {
  //   return userData?.token ? "/home" : "/login";
  // };

  return (
    <BackgroundImageContainer>
      <h1>Welcome to Tech Ecommerce</h1>
      <Link href="/home">Start here</Link>
    </BackgroundImageContainer>
  );
};

export default LandingPage;



