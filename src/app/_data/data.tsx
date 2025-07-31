import { ReactElement } from "react";
import { IconType } from "react-icons";
import {
  PiCookingPot,
  PiTelevisionSimpleFill,
  PiTShirtThin,
  PiDotsThreeCircleLight,
} from "react-icons/pi";
import { IoIosPhonePortrait, IoIosDesktop } from "react-icons/io";
import { GiLipstick } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { CiApple } from "react-icons/ci";
import { LuBaby } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";

type leftNav = {
  icon?: ReactElement<IconType>;
  type: string;
};

export const leftNavData: leftNav[] = [
  { icon: <PiCookingPot className="text-[22px]" />, type: "Appliances" },
  {
    icon: <IoIosPhonePortrait className="text-[22px]" />,
    type: "Phones & Tablets",
  },
  { icon: <GiLipstick className="text-[22px]" />, type: "Health & Beauty" },
  { icon: <GoHome className="text-[22px]" />, type: "Home & Office" },
  {
    icon: <PiTelevisionSimpleFill className="text-[22px]" />,
    type: "Electronics",
  },
  { icon: <PiTShirtThin className="text-[22px]" />, type: "Fashion" },
  { icon: <CiApple className="text-[22px]" />, type: "Supermarket" },
  { icon: <IoIosDesktop className="text-[22px]" />, type: "Computing" },
  { icon: <LuBaby className="text-[22px]" />, type: "Baby Products" },
  { icon: <IoGameControllerOutline className="text-[22px]" />, type: "Gaming" },
  { type: "Musical Instruments" },
  {
    icon: <PiDotsThreeCircleLight className="text-[22px]" />,
    type: "Other categories",
  },
];

export const carousel = [
  "/images/carousel1.png",
  "/images/carousel2.jpg",
  "/images/carousel3.jpg",
  "/images/carousel4.jpg",
  "/images/carousel5.jpg",
  "/images/carousel6.png",
  "/images/carousel7.gif",
  "/images/carousel8.jpg",
];
