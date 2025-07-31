'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { carousel } from "../_data/data";


function MiddleNav() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = carousel;
  const dots = Array(8).fill("");

  useEffect(() => {
    let intervalID: NodeJS.Timeout | number = 0;
    intervalID = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, [images.length]);

  return (
    <div className="relative cursor-pointer">
      <Image
        src={images[imageIndex]}
        alt="carousel"
        width={200}
        height={150}
        className="w-full h-full transition-all object-cover rounded-[5px]"
      />
      <div className="flex justify-center gap-2 absolute bottom-[8px] left-[50%] translate-x-[-50%]">
        {dots.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === imageIndex ? "bg-secondary" : "bg-gray-500"
            }`}
            onClick={() => {setImageIndex(index)}}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default MiddleNav