import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="justify-end mt-8">
        <Link href="/dashboard/orders" className="text-2xl text-blue-900 font-bold p-4">Your Orders</Link>
      </div>
      {children}
    </div>
  );
}