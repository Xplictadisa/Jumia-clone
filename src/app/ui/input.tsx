"use client";

import { BiSearchAlt2 } from "react-icons/bi";
import { X } from "@deemlol/next-icons";
import { ChangeEvent, useState } from "react";

function Input({ placeholder }: { placeholder: string }) {
  const [isTyping, setIsTyping] = useState(false);
  const [value, setValue] = useState("");

  const handleCancle = () => {
    setValue("");
    setIsTyping(false)
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value.trim()) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative flex-1 ">
      <BiSearchAlt2 className="absolute top-[50%] left-2 translate-y-[-50%] text-[30px] text-black/50" />
      <input
        value={value}
        onChange={handleInputChange}
        type="text"
        placeholder={placeholder}
        className=" border border-black rounded-[3px] pl-[40px] outline-0 placeholder:text-[15px] h-full w-full"
      />
      {isTyping && (
        <X
          onClick={handleCancle}
          size={30}
          color="rgb(212, 212, 214)"
          className="absolute right-2 top-[50%] translate-y-[-50%] font-bold"
        />
      )}
    </div>
  );
}

export default Input;
