import React from "react";

export default function HeroImg({
  val,
  index,
  selectedImageIndex,
  handleImageClick,
}) {
  return (
    <div
      key={index}
      className={`rounded-[20px] px-2 opacity-70 hover:opacity-100 cursor-pointer duration-200 ${
        selectedImageIndex === index ? "" : ""
      }`}
      onClick={() => handleImageClick(val.image, index)}
    >
      <img src={val.image} className="w-full rounded-[5px]" alt="" />
    </div>
  );
}
