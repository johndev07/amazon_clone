import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/basketSlice";
const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);
  let random = Math.random() < 0.5;
  const [hasPrime] = useState(random);
  const dispatch = useDispatch();
  function addItemToCart() {
    const addproduct = { id, title, price, description, category, image };
    dispatch(addToCart(addproduct));
  }
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xl italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} alt={title} />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {/* {Array.from({ length: Math.random() * 5 + 1 }).map((item, i) => {
          return (
            <span key={i}>
              <StarIcon className="h-5 text-yellow-500" key={i} />
            </span>
          );
        })} */}
      </div>
      <p className="text-sm my-2 line-clamp-2  ">{description}</p>
      <div className="mb-5">{price}</div>

      <div className="flex items-center space-x-2 -mt-5">
        <Image
          width={100}
          height={100}
          className="w-12"
          loading="lazy"
          src="https://links.papareact.com/fdw"
          alt="prime"
        />
        <p className="text-xs text-gray-500">Free Next Day Delivery</p>
      </div>

      <button onClick={() => addItemToCart()} className="mt-auto button ">
        Add to basket
      </button>
    </div>
  );
};

export default Product;
