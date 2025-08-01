import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const data = [
  { image: "/images/rowTwo/1.png", description: "Awoof Deals" },
  { image: "/images/rowTwo/2.png", description: "Up to 80% Off" },
  { image: "/images/rowTwo/3.png", description: "Send Packages Securely" },
  { image: "/images/rowTwo/4.png", description: "Up to 50% Off" },
  { image: "/images/rowTwo/5.png", description: "Unlock Your Deal" },
  { image: "/images/rowTwo/6.png", description: "Banger Deals" },
  { image: "/images/rowTwo/7.png", description: "Earn While You Shop" },
  { image: "/images/rowTwo/8.png", description: "Sporting Goods" },
  { image: "/images/rowTwo/9.png", description: "Video Games" },
  { image: "/images/rowTwo/10.png", description: "Toys & Games" },
  { image: "/images/rowTwo/11.png", description: "Groceries" },
];

function RowTwo() {

  return (
    <div className="px-11">
      <div className="relative px-15 rounded-[5px]bg-white w-full overflow-hidden shadow-btnShadow bg-white rounded-[5px]">
        <div className="absolute top-[50%] translate-y-[-50%] left-3 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-400 text-[25px] text-white">
          <MdOutlineKeyboardArrowLeft />
        </div>
         <div className="absolute top-[50%] translate-y-[-50%]  right-3 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-400 text-[25px] text-white">
          <MdOutlineKeyboardArrowRight />
        </div>
        {/*  */}
        <div style={{scrollbarWidth: 'none'}} className="flex gap-2 h-full overflow-x-scroll">
          {data.map((d) => (
            <div key={d.description} className="my-2 w-[130px] hover:w-[131px] shrink-0 hover:shadow-card rounded-[5px]">
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
