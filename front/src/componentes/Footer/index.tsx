import Image from "next/image"
import Link from "next/link";
import "@/app/globals.css"

function Footer() {
    return (
        <div>
          <footer className=" border-gray-200 mt-8">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="flex items-center justify-between mb-4">
                <Link href="https://www.linkedin.com/in/mar%C3%ADa-laura-arcucci/" target="_blank" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Image src="/images/linkedin.png" className="h-8" alt="miLinkedin" width={40} height={40} />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Maria Laura Arcucci</span>
                </Link>
                    <Link href="https://github.com/laura-ml" target="_blank" className="hover:underline">
                    <Image src="/images/github.png" className="h-8" alt="miLinkedin" width={40} height={40} />
               </Link>

                <span className="text-sm text-gray-500 dark:text-gray-400">©ecommerce 2024</span>
              </div>
            </div>
          </footer>
        </div>
      );
    }
    
    export default Footer;