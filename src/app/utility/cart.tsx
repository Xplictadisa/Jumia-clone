import { MdOutlineShoppingCart } from "react-icons/md";

function Cart() {
  return (
    <div className="text-black hover:text-button flex font-semibold">
      <MdOutlineShoppingCart />
      <p>Cart</p>
    </div>
  );
}

export default Cart;