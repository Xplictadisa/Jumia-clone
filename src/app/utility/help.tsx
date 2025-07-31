"use client";

import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosArrowDown,  IoIosArrowUp} from "react-icons/io";
import { BsChatLeftDots } from "react-icons/bs";
import Button from "./button";
import { useState } from "react";

function HelpDropDown() {
  return (
    <div className="absolute top-[calc(100%+4px)] left-[-50%] w-[220px] bg-white rounded-[5px] shadow-btnShadow">
      <ul className="*:py-2.5 *:px-3 *:cursor-pointer *:hover:bg-primary-100 *:hover:font-semibold *:font-light *:text-[15px]">
        <li>Help center</li>
        <li>Place an order</li>
        <li>Payment options</li>
        <li>Track an order</li>
        <li>Cancel an order</li>
        <li>Return & Refunds</li>
      </ul>
      {/*  */}
      <div className="p-4 border-t-1 border-primary-100">
        <Button
          type="button"
          className="bg-secondary-100 w-full h-10 flex items-center gap-3 pl-4 text-white rounded-[5px] shadow-btnShadow hover:bg-secondary cursor-pointer"
        >
          <BsChatLeftDots className="text-[20px]"/>
          Live Chat
        </Button>
      </div>
    </div>
  );
}

function Help() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative rounded-[3px] p-2 ${isOpen ? "bg-primary-200" : ""}`}
    >
      <div className="text-black hover:text-secondary cursor-pointer flex items-end gap-2 font-semibold">
        <IoMdHelpCircleOutline className="text-[25px]" />
        <p className="mb-[-4px]">Help</p>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} 
      </div>
      {isOpen && <HelpDropDown />}
    </div>
  );
}

export default Help;
