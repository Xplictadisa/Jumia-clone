import Image from "next/image";
import Star from "./star";

type logo = {
  width: number
  height: number
  className: string
  starSize: number
}

export default function Logo({width, height, className, starSize}: logo) {
  return (
    <div className={className}>
      <Image src="/images/jumia.png" alt="jumia-logo" width={width} height={height} className={`h-[${height}px] w-[${width}px]`}/>
      <Star width={starSize} height={starSize} className="self-end"/>
    </div>
  );
}
