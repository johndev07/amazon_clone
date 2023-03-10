import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCartItems } from "../slices/basketSlice";
const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const totalCartItems = useSelector(selectCartItems);

  return (
    <header className="text-white">
      <div className="flex items-center bg-amazon_blue p-3 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            alt="logo"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer ml-5 bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />

          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-8 mx-6 whitespace-nowrap">
          <div className="link" onClick={!session ? signIn : signOut}>
            <p> {session ? `hello ${session.user.name}` : "sign in"}</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {totalCartItems.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-2 bg-amazon_blue-light">
        <p className="link flex items-center ">
          <MenuIcon className="h-6 mr-1" />
        </p>
        <p className="link"> Prime video</p>
        <p className="link"> Amazon business</p>
        <p className="link"> Today&apos;s Deal</p>
        <p className="link hidden lg:inline-flex"> Electronics</p>
        <p className="link hidden lg:inline-flex"> Food & Grocery</p>
        <p className="link hidden lg:inline-flex"> Prime</p>
        <p className="link hidden lg:inline-flex"> Buy Again</p>
        <p className="link hidden lg:inline-flex"> Shopping toolkit</p>
        <p className="link hidden lg:inline-flex"> Health & Personal care</p>
      </div>
    </header>
  );
};

export default Header;
