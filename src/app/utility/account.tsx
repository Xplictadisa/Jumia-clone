"use client";

import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuPackage2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import Button from "./button";
import { useState } from "react";

function AccountDropDown() {
  return (
    <div className="absolute top-[calc(100%+4px)] left-[-50%] w-[220px] bg-white rounded-[5px] shadow-btnShadow">
      <div className="p-4 border-b-2 border-primary">
        <Button
          type="button"
          className="bg-secondary-100 w-full h-10 text-white rounded-[5px] shadow-btnShadow hover:bg-secondary cursor-pointer"
        >
          Sign in
        </Button>
      </div>
      {/*  */}
      <div>
        <div className="flex items-center gap-2 py-2 hover:bg-primary-100 px-2 cursor-pointer">
          <IoPersonOutline />
          <span>My Account</span>
        </div>
        <div className="flex items-center gap-2 py-2 hover:bg-primary-100 px-2 cursor-pointer">
          <LuPackage2 />
          <span>Orders</span>
        </div>
        <div className="flex items-center gap-2 py-2 hover:bg-primary-100 px-2 cursor-pointer">
          <FaRegHeart />
          <span>Wishlist</span>
        </div>
      </div>
    </div>
  );
}

function Account() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative rounded-[3px] p-2 ${isOpen ? "bg-primary-200" : ""}`}
    >
      <div className="text-black hover:text-secondary cursor-pointer flex font-semibold items-end gap-2">
        <IoPersonOutline className="text-[25px]" />
        <span className="mb-[-4px] text-[16px]">Account</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} 
      </div>
      {isOpen && <AccountDropDown />}
    </div>
  );
}

export default Account;
