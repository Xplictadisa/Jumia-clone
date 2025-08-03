"use client";

import { useState } from "react";
import Account from "../ui/account";
import Cart from "../ui/cart";
import Help from "../ui/help";
import Logo from "../ui/logo";
import Search from "../ui/search";

export default function Header() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div className="flex items-center h-[80px] bg-white px-11 gap-[20px] sticky top-0 z-100">
      <Logo
        width={100}
        height={50}
        className="flex gap-0.5 items-center"
        starSize={20}
      />
      <Search />
      <Account
        setIsHelpOpen={setIsHelpOpen}
        isAccountOpen={isAccountOpen}
        setIsAccountOpen={setIsAccountOpen}
      />
      <Help
        isHelpOpen={isHelpOpen}
        setIsHelpOpen={setIsHelpOpen}
        setIsAccountOpen={setIsAccountOpen}
      />
      <Cart />
    </div>
  );
}
