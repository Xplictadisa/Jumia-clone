import { NextResponse, NextRequest } from "next/server";
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

type param = {
  params: {
    category: string;
  };
};

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
  others
};

export async function GET(request: NextRequest, { params }: param) {
  const { category } = params;

  return NextResponse.json(allCategory[category]);
}
