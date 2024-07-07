"use client"
import { useEffect, useState } from "react";
import { UserSession } from "@/types";

function Dashboard() {
  const [userData, setUserData] = useState<UserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-4">Welcome {userData?.userData?.name} 🥳</h1>
      <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md mb-4">
        <p className="text-lg">This is your address:</p>
        <p className="text-lg font-bold">{userData?.userData?.address}</p>
      </div>
    </div>
  );
}

export default Dashboard;