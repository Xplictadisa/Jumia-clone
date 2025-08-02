import Title from "../ui/title";
import { rowSevenData } from "../_data/rowSeven";
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

function RowSeven() {
  const data: data[] = rowSevenData;

  return (
    <div className="px-11 mt-5">
      <div className="rounded-[5px] w-full shadow-btnShadow bg-white pb-2">
        <Title title="Limited Stock Deals" link="www.facebook.com" />
        {/*  */}
        <div style={{scrollbarWidth: "none"}} className="grid grid-cols-6 gap-3 overflow-x-scroll p-2">
        {data &&
          data.map((d, index) => (
            <div className="w-[180px] hover:shadow-card hover:scale-[1.01] rounded-[5px] cursor-pointer relative" key={index}>
              <ProductCard data={d} />
              <Discount oldPrice={d.price.old} newPrice={d.price.new} />
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}

export default RowSeven;
