
import { NextRequest, NextResponse } from "next/server";
import {
  appliances,
  health,
  phones,
  office,
  electronics,
  fashion,
  supermarket,
  baby,
  gaming,
  musical,
  computing,
  others,
} from "@/app/_data/product-category";


const allCategory = {
  appliances,
  phones,
  health,
  office,
  electronics,
  fashion,
  supermarket,
  baby,
  gaming,
  musical,
  computing,
  others,
};

export async function GET(
  request: NextRequest,
  {params}: {params: Promise<{category: string}>}
) {
  const { category } = await params;
  const data = allCategory[category as keyof typeof allCategory];

  return NextResponse.json(data);
}



