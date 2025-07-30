import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Account() {
  return (
    <div className="text-black hover:text-button flex font-semibold items-end">
      <IoPersonOutline className="text-[25px]"/>
      <p className="m-0 p-0">Account</p>
      <IoIosArrowDown />
    </div>
  );
}

export default Account;
