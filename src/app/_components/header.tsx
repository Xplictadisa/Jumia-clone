import Account from "../utility/account";
import Cart from "../utility/cart";
import Help from "../utility/help";
import Logo from "../utility/logo";
import Search from "../utility/search";

export default function Header() {

  return(
    <div className="flex items-center h-[80px] bg-white px-11 gap-[20px] sticky top-0 z-30">
      <Logo width={100} height={50} className="flex gap-0.5 items-center" starSize={20}/>
      <Search />
      <Account />
      <Help />
      <Cart />
    </div>
  )
}




