import LeftNav from "../ui/leftnav";
import RightNav from "../ui/rightNav";
import MiddleNav from "../ui/middleNav";

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
