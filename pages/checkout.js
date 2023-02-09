import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectCartItems, getCartTotal } from "../slices/basketSlice";
import CheckOutProduct from "../components/CheckOutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import ReactCurrencyFormatter from "react-currency-formatter";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(getCartTotal);
  console.log(cartTotal);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
            alt="banner"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-2xl border-b pb-4">
              {cartItems.length === 0
                ? "Your Shopping Basket is empty"
                : "Your Shopping Basket"}
            </h1>
            {cartItems?.map((product, i) => (
              <CheckOutProduct product={product} key={i} />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {cartItems.length > 0 && (
            <>
              <h2 className="whitespace-nowrap ">
                SubTotal ({cartItems.length}:items)
                <span className="font-bold">
                  <ReactCurrencyFormatter currency="INR" quantity={cartTotal} />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 p-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-100 cursor-not-allowed"
                }`}
              >
                {!session ? "Sigin to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
