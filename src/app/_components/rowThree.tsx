"use client";
import { useEffect, useState, useRef } from "react";
import ProductCard from "../ui/productCard";
import StockProgress from "../ui/stockProgress";
import Discount from "../ui/discount";
import axios from "axios";
import ArrowRight from "../ui/arrowRight";
import ArrowLeft from "../ui/arrowLeft";
import Title3 from "../ui/title3";

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

//
function RowThree() {
  const [data, setData] = useState<data[]>([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [rightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("/api/flashSales");
        setDataFetched(true);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  // effect to track state of left and right arrow
  useEffect(() => {
    if (dataFetched) {
      const elem = containerRef.current!;
      elem.addEventListener("scroll", () => {
        if (elem.scrollLeft > 0) {
          setLeftArrow(true);
        } else {setLeftArrow(false)}
      });
    }
  }, [dataFetched]);

  if (!dataFetched) {
    return (
      <div className="px-11 mt-5">
        <div className="bg-white w-full rounded-[5px] shadow-btnShadow">
          <Title3 />
          <div className="flex justify-center  h-60 items-center">
            <p>Loading</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-11 mt-5">
      <div className="rounded-[5px] w-full shadow-btnShadow bg-white pb-2 relative">
        <Title3 />
        <div
          ref={containerRef}
          style={{ scrollbarWidth: "none" }}
          className="flex gap-3 overflow-x-scroll p-2"
        >
          {data &&
            data.map((data, index) => (
              <div
                className="w-[180px] hover:shadow-card hover:scale-[1.01] flex flex-col justify-between rounded-[5px] cursor-pointer relative"
                key={index}
              >
                <ProductCard data={data} />
                <StockProgress
                  total={data.stock.total}
                  left={data.stock.left}
                />
                <Discount oldPrice={data.price.old} newPrice={data.price.new} />
              </div>
            ))}
        </div>
        {/* arrows left and right */}
        {rightArrow && (
          <ArrowRight className="absolute top-[50%] translate-y-[-50%] right-3 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-400 text-[25px] text-white cursor-pointer opacity-80 hover:opacity-100" />
        )}
        {leftArrow && (
          <ArrowLeft className="absolute top-[50%] translate-y-[-50%] left-3 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-400 text-[25px] text-white cursor-pointer opacity-80 hover:opacity-100" />
        )}
        {/*  */}
      </div>
    </div>
  );
}

export default RowThree;
