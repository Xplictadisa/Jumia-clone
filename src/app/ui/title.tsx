import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";


function Title({title, link}: {title: string, link: string}) {
  return <div className="bg-disc-1 h-12 rounded-t-[5px] flex justify-between items-center px-6">
        <span>{title}</span>
        <div className="flex items-center gap-1">
          <Link href={link}>See All</Link>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
}


export default Title