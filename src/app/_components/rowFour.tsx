import Image from "next/image";
import { rowFourData } from "../_data/rowFour";

type data = {
  image: string;
  description: string;
};

function RowFour() {
  const data: data[] = rowFourData;
  
  return (
    <div className="px-11">
      <div className="shadow-btnShadow rounded-[5px] bg-white grid grid-cols-6 gap-3 mt-5 p-2">
        {data &&
          data.map((d, index) => (
            <div key={index} className="hover:shadow-card hover:scale-[1.01] rounded-[5px]">
                <Image
                  src={d.image}
                  alt="img"
                  width={200}
                  height={220}
                  className="rounded-[5px]"
                />
                <div className="text-center py-2 text-[15px]">{d.description}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RowFour;
