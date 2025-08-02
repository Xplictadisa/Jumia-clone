"use client";
import { useEffect, useState } from "react";
import { leftNavData } from "../_data/data";
import axios from "axios";

type data = {
  title: string
  list: string[]
}

function LeftNav() {
  const [isHovering, setIsHovering] = useState(false);
  const [category, setCategory] = useState('appliances')
  const [data, setData] = useState<data[]>([])

  const handleMouseEnter = (category: string) => {
    setIsHovering(true);
    setCategory(category)
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const url = `/api/products/${category}`
    const getProductCategory = async () => {
      try {
      const response = await axios.get(url)
      setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getProductCategory()
  },[category])

  return (
    <div className="px-2 bg-white shadow-btnShadow rounded-[5px] relative">
      <ul>
        {leftNavData.map((n) => (
          <li
            onMouseEnter={() => {handleMouseEnter(n.category)}}
            onMouseLeave={handleMouseLeave}
            className="flex items-center py-1.5 gap-1 text-[12px] hover:text-secondary-100 cursor-pointer"
            key={n.type}
          >
            {n.icon}
            <span>{n.type}</span>
          </li>
        ))}
      </ul>
      {isHovering && (
        <div
          onMouseEnter={() => {setIsHovering(true)}}
          onMouseLeave={handleMouseLeave}
          className="absolute top-0 z-50 bg-white left-[98%] h-full w-[730px] p-2 border-l-1 border-l-primary-100 rounded-tr-[5px] rounded-br-[5px] overflow-hidden columns-3 gap-8"
        >
          {data && data.map((c) => <div key={c.title}>
            <p className="border-b border-primary-100 py-1 text-[13px] font-medium mb-2 hover:text-secondary cursor-pointer">{c.title}</p>
            <ul>
              {c.list.map((list, index) => <li key={index} className="text-[12px] py-1 font-light hover:font-medium cursor-pointer">{list}</li>)}
            </ul>
          </div>)}
        </div>
      )}
    </div>
  );
}

export default LeftNav;
