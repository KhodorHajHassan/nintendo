import React from "react";
import { nintendoStore } from "../data.jsx";
import { IoIosCloseCircle } from "react-icons/io";

export default function NintendoStore({ show, click }) {
  return (
    <div
      className={`bg-white absolute  top-24 z-40 left-0 w-full duration-100 ${
        show ? "h-80 visible" : " invisible h-0"
      } `}
    >
      <div className="w-full bg-secondary p-4 flex justify-center items-center gap-2 text-white">
        <img
          src="https://shadowindali.github.io/Nintendo/shoplogo.png"
          className="w-52"
          alt=""
        />
        <div onClick={()=>click(!show)} className="absolute top-4 text-3xl right-4 cursor-pointer">
        <IoIosCloseCircle />
        </div>
      </div>
      <div className="zigzag"></div>
      <div className="flex justify-center gap-8 mt-4">
        {nintendoStore.map((item, index) => {
          return (
            <div className="flex flex-col flex-start">
              <div key={index} className="flex items-center gap-2 mb-2">
                <img src={item.image} className="w-5" alt="" />
                <p className="text-primary font-bold hover:text-secondary cursor-pointer">{item.title}</p>
              </div>
              <div className="flex flex-col gap-2 text-gray-500">
                {item.link.map((val, index) => {
                  return (
                    <>
                      <div className="text-sm hover:text-secondary cursor-pointer" key={index}>
                        {val}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center items-center mt-4 mb-2">
        <div className="rounded-[0.75rem] py-3 px-6 border-secondary border-[1px] text-secondary hover:duration-200 hover:bg-red-200 bg-white cursor-pointer font-bold">Shop all</div>
      </div>
    </div>
  );
}
