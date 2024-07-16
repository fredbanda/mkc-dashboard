import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-5 text-center`}
    >
      <div className="max-w-xl lg:max-w-3xl text-center">
        <Image
          className="mx-auto w-auto"
          src="/logo.jpg"
          alt="Mike's Kitchen Cabinets"
          width={100}
          height={50}
          priority
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome to Mike&apos;s Kitchen Cabinets&apos; Dashboard
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500 max-w-sm mx-auto">
          From here you will be able to add or delete products from your
          website. This site is only accessible to admin only. Do not share your
          login details! Please Login by clicking the link below.
        </p>
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4 my-4 flex items-center justify-center">
          <Link
            href="/dashboard"
 
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-2xl font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 "
          >
            Login By Clicking Here
          </Link>
        </div>
      </div>
    </div>
  );
}
