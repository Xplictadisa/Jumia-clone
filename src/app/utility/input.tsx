import { BiSearchAlt2 } from "react-icons/bi";

function Input({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative flex-1 ">
      <BiSearchAlt2 className="absolute top-[50%] left-2 translate-y-[-50%] text-[30px] text-black/50" />
      <input
        type="text"
        placeholder={placeholder}
        className=" border border-black rounded-[3px] pl-[40px] outline-0 placeholder:text-[15px] h-full w-full"
      />
    </div>
  );
}


export default Input