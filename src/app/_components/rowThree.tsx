"use client";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { rowThreeData } from "../_data/rowThree";
import ProductCard from "../ui/productCard";
import { countDown } from "../utility/utility";
import StockProgress from "../ui/stockProgress";
import Discount from "../ui/discount";

type data = {
  image: string;
  description: string;
  price: {
    old: number | undefined;
    new: number;
  };
  stock: {
    total: number;
    left: number;
  };
};


function RowThree() {
  const [timeLeft, setTimeLeft] = useState(5400);
  const data: data[] = rowThreeData;
  const timer = countDown(timeLeft);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <div className="px-11 mt-5">
      <div className="rounded-[5px] w-full shadow-btnShadow bg-white pb-2">
        <div className="bg-red-600 h-12 rounded-t-[5px] flex justify-between items-center px-6 text-white">
          <div>
            <span>Flash Sales</span>
          </div>
          <div>
            <span className="mr-2">Time Left</span>
            <span>{timer}</span>
          </div>
          <div className="flex items-center gap-1">
            <span> See All</span>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        {/*  */}
        <div style={{scrollbarWidth: "none"}} className="flex gap-3 overflow-x-scroll p-2">
          {data &&
            data.map((data, index) => (
              <div className="w-[180px] hover:shadow-card hover:scale-[1.01] flex flex-col justify-between rounded-[5px] cursor-pointer relative" key={index}>
                <ProductCard  data={data} />
                <StockProgress total={data.stock.total} left={data.stock.left} />
                <Discount oldPrice={data.price.old} newPrice={data.price.new}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RowThree;
