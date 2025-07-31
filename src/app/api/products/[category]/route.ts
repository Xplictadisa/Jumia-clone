import { NextResponse, NextRequest } from "next/server"
import { appliances } from "@/app/_data/product-category"

type param = {
  params: {
    category: string
  }
}

const allCategory = {
  appliances,
}

export async function GET(request: NextRequest, {params}: param) {
  const {category} =  params
  
  return NextResponse.json(allCategory[category])
}