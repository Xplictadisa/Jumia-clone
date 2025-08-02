import { rowSixData } from "../_data/rowSix";
import ProductCard from "../ui/productCard";
import Discount from "../ui/discount";

type data = {
  image: string;
  description: string;
  price: {
    old: number | undefined;
    new: number;
  };
};

function RowSix() {
  const data: data[] = rowSixData;

  return (
    <div className="px-11 mt-5">
      <div className="rounded-[5px] w-full shadow-btnShadow bg-white pb-2">
        <div className="h-12 rounded-t-[5px] flex items-center px-6">
          <span className="font-semibold text-[22px]">Sponsored Products</span>
        </div>
        {/*  */}
        <div
          style={{ scrollbarWidth: "none" }}
          className="flex gap-3 overflow-x-scroll p-2"
        >
          {data &&
            data.map((d, index) => (
              <div
                className="w-[180px] hover:shadow-card hover:scale-[1.01] rounded-[5px] cursor-pointer relative"
                key={index}
              >
                <ProductCard data={d} />
                <Discount oldPrice={d.price.old} newPrice={d.price.new} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RowSix;
