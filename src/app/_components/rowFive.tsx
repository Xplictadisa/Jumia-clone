import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { rowFiveData } from "../_data/rowFive";
import ProductCard from "../ui/productCard";

type data = {
  image: string;
  description: string;
  price: {
    old: number | undefined;
    new: number;
  };
};

function RowFive() {
  const data: data[] = rowFiveData;
  return (
    <div className="px-11 mt-5">
      <div className="rounded-[5px] w-full shadow-btnShadow bg-white pb-2">
        <div className="bg-disc-1 h-12 rounded-t-[5px] flex justify-between items-center px-6">
        <span>Top Sellers</span>
        <div className="flex items-center gap-1">
          <span> See All</span>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      {/*  */}
      <div style={{scrollbarWidth: "none"}} className="flex gap-3 overflow-x-scroll p-2">
        {data &&
          data.map((d, index) => (
            <div className="w-[180px] hover:shadow-card hover:scale-[1.01] rounded-[5px] cursor-pointer relative" key={index}>
              <ProductCard data={d} />
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}

export default RowFive;
