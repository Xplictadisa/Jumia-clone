import Account from "../utility/account";
import Cart from "../utility/cart";
import Help from "../utility/help";
import Logo from "../utility/logo";
import Search from "../utility/search";

export default function Header() {

  return(
    <div className="flex items-center h-[80px] bg-white mt-3 px-[50px] gap-[20px]">
      <Logo />
      <Search />
      <Account />
      <Help />
      <Cart />
    </div>
  )
}

