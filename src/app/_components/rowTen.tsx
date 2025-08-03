import { rowTenData } from "../_data/rowTen";
import ProductCard from "../ui/productCard";
import Discount from "../ui/discount";
import Title2 from "../ui/title2";

type data = {
  image: string;
  description: string;
  price: {
    old: number | undefined;
    new: number;
  };
};

function RowTen() {
  const data: data[] = rowTenData;

  return (
    <div className="px-11 mt-5">
      <div className="rounded-[5px] w-full shadow-btnShadow bg-white pb-2">
        <Title2 title="Top selling items"/>
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

export default RowTen;
