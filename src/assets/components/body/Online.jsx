import React from "react";
import Button from "./Button";

export default function Online() {
  return (
    <div className="xl:p-0 lg:p-4 p-4">
      <div className="xl:w-7/12 lg:w-full w-ful m-auto bg-gray-100 rounded-[1rem] md:my-20 my-8 flex">
        <div className="xl:w-6/12 lg:6/12 w-full md:mt-4 mt-0 md:p-4 md:px-8 p-8 ">
          <img
            src="https://shadowindali.github.io/Nintendo/online.png"
            alt=""
            className="mb-8 w-52"
          />
          <p className="text-primary font-semibold md:text-[1.3125rem] leading-87 text-lg md:mb-8 mb-4">
            Play online, access classic NES™ and Super NES™ games, and more with
            a Nintendo Switch Online membership.
          </p>
          <div className="text-primary font-semibold">
            This game supports:{" "}
            <a href="#" className="text-secondary border-b-2 border-secondary hover:text-red-700 duration-300 font-bold md:mx-0 mx-2">
              Online Play{" "}
            </a>
            <a href="#" className="text-secondary border-b-2 border-secondary hover:text-red-700 duration-300 font-bold mx-2">
              Online Play
            </a>
          </div>
          <div className="mt-2">
            <Button data="Learn more" />
          </div>
        </div>
        <div className="xl:w-6/12 w-full md:block hidden translate-y-5">
          <img
            src="https://shadowindali.github.io/Nintendo/controllerhand.avif"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}
