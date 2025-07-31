import LeftNav from "../utility/leftnav";
import RightNav from "../utility/rightNav";
import MiddleNav from "../utility/middleNav";

function RowOne() {
  return (
    <div className="grid grid-cols-[220px_1fr_220px] gap-3  px-11 py-5">
      <LeftNav />
      <MiddleNav />
      <RightNav />
    </div>
  );
}

export default RowOne;





