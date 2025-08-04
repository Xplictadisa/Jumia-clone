import Image from "next/image";

function RowFifteen() {
  return <div className="px-11 mt-5">
<div className="p-3 rounded-[5px] bg-white shadow-btnShadow cursor-pointer">
<Image src="/images/nivea.jpg" alt="nivea" width={300} height={50} className="rounded-[5px] w-full hover:scale-[1.01]" />
</div>
  </div>
}

export default RowFifteen