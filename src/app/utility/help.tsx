import { IoMdHelpCircleOutline } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io";

function Help() {
  return (
    <div className="text-black hover:text-button flex font-semibold">
      <IoMdHelpCircleOutline />
      <p>Help</p>
      <IoIosArrowDown />
    </div>
  );
}

export default Help;
