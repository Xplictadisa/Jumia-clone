import { IoIosCall } from "react-icons/io";
import { MdHouseSiding } from "react-icons/md";
import { PiVan } from "react-icons/pi";


function RightNav() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-1/2 w-full bg-white rounded-[5px] shadow-btnShadow px-4 py-8 flex flex-col justify-between">
        <div className="flex gap-2 items-center">
          <IoIosCall className="text-[30px] border border-secondary rounded-full text-gray-500" />
          <div className="flex flex-col overflow-hidden ">
            <span>CALL TO ORDER</span>
            <span className="text-[12px] text-nowrap">
              0700-600-0000, 020188812345
            </span>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-2 items-center">
          <MdHouseSiding className="text-[30px] border border-secondary rounded-full text-gray-500" />
          <span>Sell on Jumia</span>
        </div>
        {/*  */}
        <div className="flex gap-2 items-center">
          <PiVan className="text-[30px] text-gray-500" />
          <span>Send Your Packages</span>
        </div>
      </div>

      {/* second box */}
      <div className="h-1/2 w-full bg-secondary-100 rounded-[5px] p-5 flex flex-col justify-end items-center">
        <span className="text-white text-[30px] animate-blink">JOIN NOW</span>
      </div>
    </div>
  );
}


export default RightNav