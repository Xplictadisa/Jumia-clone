"use client";
import Image from "next/image";
import {useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { rowTwoData } from "../_data/rowTwo";

type data = {
  image: string
  description: string
}

function RowTwo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const data: data[] = rowTwoData

  const handleLeft = () => {
    const elem = containerRef.current!;
    elem.scrollLeft = 0;
    elem.style.scrollBehavior = 'smooth'
  };
  const handleRight = () => {
    const elem = containerRef.current!;
    elem.scrollLeft = elem.scrollWidth;
    elem.style.scrollBehavior = 'smooth'
  };

  return (
    <div className="px-11">
      <div className="relative px-15 rounded-[5px]bg-white w-full overflow-hidden shadow-btnShadow bg-white rounded-[5px]">
        <div
          onClick={handleLeft}
          className="absolute top-[50%] translate-y-[-50%] left-3 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-400 text-[25px] text-white cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div
          onClick={handleRight}
          className="absolute top-[50%] translate-y-[-50%]  right-3 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-400 text-[25px] text-white cursor-pointer"
        >
          <MdOutlineKeyboardArrowRight />
        </div>
        {/*  */}
        <div
          ref={containerRef}
          style={{ scrollbarWidth: "none" }}
          className="flex gap-2 h-full overflow-x-scroll"
        >
          {data.map((d) => (
            <div
              key={d.description}
              className="my-2 w-[130px] hover:scale-[1.01] shrink-0 hover:shadow-card rounded-[5px] cursor-pointer"
            >
              <Image
                src={d.image}
                alt="image"
                width={130}
                height={160}
                className="rounded-[5px] w-full"
              />
              <p className="text-center text-[14px] px-4">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RowTwo;
