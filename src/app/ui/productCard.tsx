import Image from "next/image";
import { formatPrice } from "../utility/utility";
import FormatPrice from "./formatPrice";

type product = {
  data: {
    image: string;
    description: string;
    price: {
      old: number | undefined;
      new: number;
    };
    stock?: {
      total: number;
      left: number;
    };
  };
};

function ProductCard({ data }: product) {
  return (
    <div className="shrink-0 w-full">
      <Image
        src={data.image}
        alt="top goods"
        width={180}
        height={320}
        className="rounded-[5px]"
      />
      <div className="text-nowrap font-light text-[15px] text-ellipsis overflow-hidden px-2">
        {data.description}
      </div>
      {/* prices */}
      <div className="flex flex-col">
        <div className="px-2 mb-0">
          <FormatPrice price={data.price.new} />
        </div>
        <small className="px-2 line-through font-light text-[12px] text-neutral-600">
          <FormatPrice price={data.price.old} />
        </small>
      </div>
    </div>
  );
}

export default ProductCard;

export const d = `<div className="px-2">
        <span>{data.stock.left}</span>
        <div className="w-full border border-black h-2 rounded-full">
          <div className="bg-red-700"></div>
        </div>
      </div>`;
