import Logo from "../ui/logo";
import Star from "../ui/star";

async function Advert() {
  return (
    <div className="flex justify-between px-11 h-8 items-center">
      <div className="flex items-center gap-1">
        <Star width={15} height={15} circleColor="orange" starColor="white"/>
        <span className="hover:underline text-secondary text-[12px]">
          Sell on jumia
        </span>
      </div>
      <div>
        <Logo
          width={50}
          height={12}
          className="flex gap-0.5 items-center"
          starSize={15}
        />
      </div>
      <div></div>
    </div>
  );
}

export default Advert;
