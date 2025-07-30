import Image from "next/image";
import Star from "./star";

export default function Logo() {
  return (
    <div className="flex gap-0.5 items-center">
      <Image src="/images/jumia.png" alt="jumia-logo" width={100} height={50} />
      <Star width={20} height={20} className="self-end"/>
    </div>
  );
}
