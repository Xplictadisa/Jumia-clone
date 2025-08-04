import { useState, useEffect } from "react";
import { countDown } from "../utility/utility";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Title3() {
  const [timeLeft, setTimeLeft] = useState(5400);
  const timer = countDown(timeLeft);

  useEffect(() => {
    // promo time count
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <div className="bg-red-600 h-12 rounded-t-[5px] flex justify-between items-center px-6 text-white">
      <div>
        <span>Flash Sales</span>
      </div>
      <div>
        <span className="mr-2">Time Left</span>
        <span>{timer}</span>
      </div>
      <div className="flex items-center gap-1">
        <span> See All</span>
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  );
}

export default Title3