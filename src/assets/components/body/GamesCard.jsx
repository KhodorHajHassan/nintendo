import React from "react";
import { FaRegHeart } from "react-icons/fa";

const GamesCard = ({ val, index }) => {
  const oldPrice = ((val.price * val.discounnt) / 100).toFixed(2);
  return (
      <div
        key={index}
        className="rounded-md border-[1px] md:mx-3 mx-1 overflow-hidden  group cursor-pointer z-10"
      >
        <div className="group-hover:-translate-y-3 duration-200 z-20">
          <img
            src={val.image}
            className="w-full rounded-t-md group-hover:-translate-y-3 duration-200 z-20"
            alt=""
          />
        </div>
        <div className="p-3 text-primary flex flex-col justify-between gap-2 h-48">
          <div>
            <p className="font-semibold group-hover:text-secondary duration-200">
              {val.name}
            </p>
            <span className="text-xs text-gray-500 mb-10">{val.date}</span>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className={`rounded-[20px] max-w-32 text-xs font-bold text-center px-2 py-1  bg-secondary text-white ${
                val.isSale ? "" : "hidden"
              }`}
            >
              Sales ends: {val.sale} days
            </button>
            <button
              className={`rounded-[20px] w-20 text-xs font-bold  text-center px-2 py-1 bg-blue-700 text-white ${
                val.isDemo ? "" : "hidden"
              }`}
            >
              Free demo
            </button>
            <p className="font-bold flex gap-x-3 items-center">
              {val.isSale ? (
                <>
                  ${val.price}
                  <span className="line-through text-xs font-normal">
                    ${oldPrice}
                  </span>
                  <span className="discount-label p-2">-{val.discounnt}%</span>
                </>
              ) : (
                `$${val.price}`
              )}
            </p>
            <div className="flex justify-between items-center gap-2">
              <p className="md:text-balance text-xs">
                <span className="font-semibold text-secondary">| </span>
                Nintendo Switch
              </p>
              <FaRegHeart className="text-secondary text-xl" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default GamesCard;
