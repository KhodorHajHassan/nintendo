import React from "react";
import { games } from "../data.jsx";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import GamesCard from "./GamesCard.jsx";


export default function Games() {
  const handleNext = () => {
    sliderRef.slickNext();
  };

  const handlePrev = () => {
    sliderRef.slickPrev();
  };

  let sliderRef;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div className="z-10">
      <div className="xl:w-7/12 w-full m-auto mb-10 xl:p-0 p-4 relative">
        <h1 className="text-primary mb-12 font-bold text-2xl">
          More like this
        </h1>
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {games.map((val, index) => {
            return (
             <GamesCard val={val} index={index} />
            );
          })}
        </Slider>
        <button
          className=" md:w-16 w-14 md:h-96 md:block hidden h-80 text-center absolute lg:top-14 top-20 xl:left-[-30px] left-[-0px] bg-primary opacity-55 rounded-lg text-5xl font-bold text-gray-400 duration-200 hover:opacity-75 hover:text-6xl hover:text-white"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
        <button
          className="md:w-16 w-14 md:h-96 h-80 text-center md:block hidden absolute lg:top-14 top-20  xl:right-[-30px] right-[0px] bg-primary opacity-55 rounded-lg text-5xl font-bold text-gray-400 duration-200 hover:opacity-75 hover:text-6xl hover:text-white"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
        <div className="md:my-24 my-12 -translate-x-7">
          <p className="text-xs my-4 text-gray-500">
            WARNING: If you have epilepsy or have had seizures or other unusual
            reactions to flashing lights or patterns, consult a doctor before
            playing video games. All users should read the Health and Safety
            Information available in the system settings before using this
            software.
          </p>
          <p className="text-xs my-4 text-gray-500">
            Nintendo Switch Online membership (sold separately) and Nintendo
            Account required for online play. Not available in all countries.
            Internet access required for online features. Terms apply.
            nintendo.com/switch-online
          </p>
          <p className="text-xs my-4 text-gray-500" text-gray-500>
            Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
