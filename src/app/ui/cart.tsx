import { MdOutlineShoppingCart } from "react-icons/md";

function Cart() {
  return (
    <div className="text-black hover:text-secondary cursor-pointer flex items-end gap-2 font-semibold">
      <MdOutlineShoppingCart className="text-[25px]" />
      <p className="">Cart</p>
    </div>
  );
}

export default Cart;