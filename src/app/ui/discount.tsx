import { discount } from "../utility/utility";

type props = {
  oldPrice: number | undefined
  newPrice: number
}

function Discount({oldPrice, newPrice}: props) {
  return (
    <span className="text-secondary bg-disc px-2 absolute top-2 right-2">
      {discount(oldPrice, newPrice)}
    </span>
  );
}

export default Discount;
