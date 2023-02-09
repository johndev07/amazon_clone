import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/basketSlice";

const CheckOutProduct = ({ product }) => {
  const { id, title, price, description, category, image } = product;
  const dispatch = useDispatch();
  const [hasPrime] = useState(Math.random() > 0.5 ? true : false);
  function addItemToBasket() {
    dispatch(addToCart({ id, title, price, description, category, image }));
  }

  function removeItemFromBasket() {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="grid grid-cols-5">
      <div>
        <Image src={image} alt={title} width={200} height={200} />
      </div>
      <div className="flex flex-col col-span-3 mx-5">
        <h4>{title}</h4>
        <div className="flex">
          {Array.from({ length: Math.random() * 5 + 1 }).map((_, i) => {
            return (
              <span key={i}>
                <StarIcon className="h-5 text-yellow-500" key={i} />
              </span>
            );
          })}
        </div>
        <p className="line-clamp-3 ">{description}</p>
        <span>
          <Currency quantity={price} currency="INR" />
        </span>
        {hasPrime && (
          <div className="flex items-center">
            <Image
              src="https://links.papareact.com/fdw"
              width={50}
              height={50}
              alt="prime"
            />
            <span>Free Delivery Assuered</span>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={() => addItemToBasket()} className="button">
          Add to basket
        </button>
        <button onClick={() => removeItemFromBasket()} className="button">
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
