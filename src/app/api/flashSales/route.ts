import {NextResponse} from "next/server";
import { rowThreeData } from "@/app/_data/rowThree";


export async function GET() {
 const data = rowThreeData
  return NextResponse.json(data);
}
